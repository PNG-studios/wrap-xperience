"use client";

export default function Footer() {
  return (
    <footer className="bg-[url(/images/hero.png)] bg-[] bg-blend-darken bg-cover w-full h-[60vh] bg-black/70  text-[#ffffff] justify-center flex ">
      <div className="max-w-[1440px] w-full h-full text-[1.5rem] flex flex-row flex-wrap justify-between content-center py-[1.5rem]">
        <div className="w-[40%]">
          <img src="/images/" alt="Logo" />
          <p>
            Wrap-Xperience is dé specialist in keukenwrapping – een snelle en
            betaalbare manier om je keuken een compleet nieuwe uitstraling te
            geven, zonder ingrijpende verbouwing.
          </p>
        </div>
        <div className="w-[46%]">
          <h2 className="text-4xl font-bold text-dark">Contact</h2>
          <div className="flex flex-row gap-10 py-8">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a className="text-6xl" href="">F</a>
          </div>
          <a
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors"
            href=""
          >
            MAAK AFSPRAAK
          </a>
        </div>
      </div>
    </footer>
  );
}
