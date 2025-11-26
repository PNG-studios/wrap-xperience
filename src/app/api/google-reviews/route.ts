import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return NextResponse.json(
      { error: "Place ID is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Google Places API key not configured" },
      { status: 500 }
    );
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
      placeId
    )}?fields=displayName,rating,userRatingCount,reviews`;

    const googleResponse = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
      },
      cache: "no-store", // don't cache reviews
    });

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text();
      return NextResponse.json(
        { error: `Google Places API request failed: ${errorText}` },
        { status: googleResponse.status }
      );
    }

    const data = await googleResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    const message =
      error instanceof Error ? error.message : "Failed to fetch reviews";
    return NextResponse.json(
      { error: `Failed to fetch reviews: ${message}` },
      { status: 500 }
    );
  }
}
