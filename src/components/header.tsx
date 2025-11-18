import Navbar from "./navbar";

interface HeaderProps {
  backgroundImage1: React.ReactNode;
  title: string;
}

export default function Header({ backgroundImage1, title }: HeaderProps) {
  const style: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "darken",
  };
  return (
    <>
      <Navbar />

      <header
        style={style}
        className="w-full h-[50vh] items-center mx-auto bg-cover flex flex-col sm:justify-between justify-end"
      >
        <div className="max-w-[1440px] w-full ">
          <h2 className="text-white sm:text-8xl text-[10rem] font-bold pb-8 sm:ml-0 ml-6">
            {title}
          </h2>
        </div>
      </header>
    </>
  );
}
