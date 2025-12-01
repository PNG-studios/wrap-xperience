import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

interface HeaderProps {
  backgroundImageSrc: string;
  title: string;
}

export default function Header({ backgroundImageSrc, title }: HeaderProps) {
  const style: React.CSSProperties = {
    backgroundImage: `url(${backgroundImageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "darken",
  };
  return (
    <>
      <Navbar />
      <header className={styles.header} style={style}>
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
        </div>
      </header>
    </>
  );
}
