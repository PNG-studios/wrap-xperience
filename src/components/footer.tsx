"use client";

export default function Footer() {
  return (
    <footer className="bg-[url(/images/hero.png)] bg-[] bg-blend-darken bg-cover w-full sm:h-[60vh] h-[40vh] bg-black/70  text-[#ffffff] justify-center flex ">
      <div className="max-w-[1440px] sm:w-full w-[90vw] h-full text-[1.5rem] flex sm:flex-row flex-col flex-wrap sm:justify-between justify-evenly content-center py-[1.5rem]">
        <div className="sm:w-[40%] w-[100%]">
          <img src="/images/" alt="Logo" />
          <p className="sm:text-xl text-4xl">
            Wrap-Xperience is dé specialist in keukenwrapping – een snelle en
            betaalbare manier om je keuken een compleet nieuwe uitstraling te
            geven, zonder ingrijpende verbouwing.
          </p>
        </div>
        <div className="sm:w-[46%] w-[100%]">
          <h2 className="sm:text-4xl text-8xl font-bold text-dark">Contact</h2>
          <div className="flex flex-row justify-evenly sm:justify-start gap-10 py-8">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:size-16 size-32"
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
                className="sm:size-16 size-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
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
                className="sm:size-16 size-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                />
              </svg>
            </a>
          </div>
          <a
            className="bg-primary hover:bg-primary/80 text-white sm:px-6 px-[16rem] py-3 p-5 rounded-xl transition-colors sm:text-[1.5rem] text-[3rem]"
            href=""
          >
            MAAK AFSPRAAK
          </a>
        </div>
      </div>
    </footer>
  );
}
