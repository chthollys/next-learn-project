import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";
import MainHeaderBackground from "@/components/main-header/MainHeaderBackground";

export const metadata: Metadata = {
  title: "Foodies App",
  description: "Food Online App by chthollys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
