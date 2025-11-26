// GoogleReviews.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "../Icons/icons";
import styles from "./googleReviews.module.css";

interface Review {
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  rating: number; // FIX: Google Places v1 uses "rating" on review objects
  originalText?: { text: string };
  relativePublishTimeDescription?: string;
  createTime?: string;
}

interface GoogleBusinessInfo {
  displayName: { text: string };
  rating: number;
  userRatingCount: number;
  reviews: Review[];
}

interface GoogleReviewsProps {
  className?: string;
  maxReviews?: number;
  placeId: string;
}

export default function GoogleReviews({
  className = "",
  maxReviews = 6, // fix: valid numeric default
  placeId,
}: GoogleReviewsProps) {
  const [businessInfo, setBusinessInfo] = useState<GoogleBusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        console.log("Fetching reviews for placeId:", placeId);
        const res = await fetch(`/api/google-reviews?placeId=${encodeURIComponent(placeId)}`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        setBusinessInfo(data);
        console.log(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [placeId]);

  const renderStars = (rating: number) => {
    const rounded = Math.max(0, Math.min(5, Math.round(rating)));
    return Array.from({ length: 5 }, (_, index) => {
      const isActive = index < rounded;
      return (
        <Icons name="star" key={index} />
      );
    });
  };

  if (loading) {
    return <div className={`p-6 ${className}`}>Loading reviews…</div>;
  }

  if (error) {
    return (
      <div className={`p-6 ${className} text-red-600`}>
        Error loading reviews: {error}
      </div>
    );
  }

  if (!businessInfo || !businessInfo.reviews?.length) {
    return (
      <div className={`p-6 ${className} text-gray-500`}>
        No reviews available
      </div>
    );
  }

  const reviewsToShow = businessInfo.reviews.slice(0, maxReviews);

  return (
    <div className={styles.container}>
      {/* Business Header */}
      <div className={styles.header}>
        
          <h2>
            {businessInfo.displayName.text}
          </h2>
          <div>
            <div className="flex">
              {renderStars(businessInfo.rating)}
            </div>
            <span className={styles.rating__text}>
              {businessInfo.rating.toFixed(1)}
            </span>
            <span className={styles.rating__amount}>
              ({businessInfo.userRatingCount} reviews)
            </span>
          </div>
        
      </div>

      {/* Reviews */}
      <div className={styles.reviews__container}>
        {reviewsToShow.map((review, index) => (
          <div
            key={index}
            className={styles.reviews}
          >
            <div className={styles.review__card}>
              {/* Avatar */}
              <div className={styles.review__author}>
                {review.authorAttribution?.photoUri ? (
                  <Image
                    src={review.authorAttribution.photoUri}
                    alt={review.authorAttribution.displayName || "User"}
                    width={48}
                    height={48}
                    className={styles.review__author__avatar}
                  />
                ) : (
                  <div className={styles.review__author__name}>
                    {review.authorAttribution?.displayName?.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
                <div className={styles.review__header}>
                  <div>
                    <h3 className={styles.review__title}>
                      {review.authorAttribution?.displayName + "HALLONIELSASDDDDDDDDDDDDDD"|| "Anonymous"}
                    </h3>
                    <p className={styles.review__date}>
                      {review.relativePublishTimeDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className={styles.review}>
                <div className={styles.stars}>
                    {renderStars(review.rating)} {/* FIX: use review.rating */}
                  </div>

                {review.originalText?.text && (
                  <p>
                    {review.originalText.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}