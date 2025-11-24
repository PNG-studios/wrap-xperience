// GoogleReviews.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "../Icons/icons";

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
    <div className={`space-y-6 flex-col ${className}`}>
      {/* Business Header */}
      <div className="flex flex-col items-center justify-self-center  ">
        
          <h2 className="sm:text-2xl text-[2.5rem] font-bold text-gray-900">
            {businessInfo.displayName.text}
          </h2>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {renderStars(businessInfo.rating)}
            </div>
            <span className="sm:text-lg text-[1.8rem] font-semibold text-gray-700">
              {businessInfo.rating.toFixed(1)}
            </span>
            <span className="sm:text-lg text-[1.8rem] text-gray-500 ml-2">
              ({businessInfo.userRatingCount} reviews)
            </span>
          </div>
        
      </div>

      {/* Reviews */}
      <div className="flex sm:flex-row sm:text-xl text-[2.5rem] flex-col gap-6">
        {reviewsToShow.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 sm:rounded-lg rounded-[1.75rem] p-6 shadow-sm hover:shadow-md transition-shadow flex-1"
          >
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {review.authorAttribution?.photoUri ? (
                  <Image
                    src={review.authorAttribution.photoUri}
                    alt={review.authorAttribution.displayName || "User"}
                    width={48}
                    height={48}
                    className="w-16 h-16 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                    {review.authorAttribution?.displayName?.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1  min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate">
                      {review.authorAttribution?.displayName || "Anonymous"}
                    </h3>
                    <p className="text-[1.4rem] sm:text-sm text-gray-500">
                      {review.relativePublishTimeDescription}
                    </p>
                  </div>
                  <div className="flex ml-4">
                    {renderStars(review.rating)} {/* FIX: use review.rating */}
                  </div>
                </div>

                {review.originalText?.text && (
                  <p className="text-gray-700 leading-relaxed sm:text-sm text-[1.8rem]">
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