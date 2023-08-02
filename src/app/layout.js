// "use client";

import "./globals.css";
import { Inter, Oswald } from "next/font/google";
import variable from "./variables.module.scss";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Duels | The 1st Cyberpunk Cowboys NFT Game",
  description: "Crypto Duels | The 1st Cyberpunk Cowboys NFT Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="layout"
        style={{
          fontFamily: variable.bodyFontFamily,
        }}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
