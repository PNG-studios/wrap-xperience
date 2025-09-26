import GoogleReviews from "@/components/googleReviews";


const placeId = process.env.NEXT_PUBLIC_PLACE_ID || "ChIJN1t_tDeuEmsRUsoyG83frY4";

export default function TestPage() {
  return (
    <main>
      <header className="bg-[url(/images/hero3.png)] bg-cover "></header>

      <GoogleReviews
        placeId={placeId}
        maxReviews={8}
        className=""
      />
    </main>
  );
}
