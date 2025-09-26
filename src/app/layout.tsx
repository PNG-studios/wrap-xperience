import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Wrap-Xperience",
  description: "WRAP JOUW KEUKEN IN 1 DAG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
