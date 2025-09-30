import Navbar from "./navbar";

interface HeaderProps {
  backgroundImage1: React.ReactNode;
  title: string;
}



export default function Header({
  backgroundImage1,
  title,
}: HeaderProps) {

  const style: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "darken",
  };
  return (
    <header style={style} className="w-full h-[50vh] items-center mx-auto bg-cover flex flex-col justify-between">
        <Navbar />

        <div className="max-w-[1440px] w-full ">
          <h2 className="text-white text-8xl font-bold pb-8">{title}</h2>
        </div>
    </header>
  );
}
