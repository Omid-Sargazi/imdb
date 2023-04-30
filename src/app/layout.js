import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clobe",
  description: "This is IMDb clone website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {/* Header  */}
          <Header />
          {/* Navbar */}

          {/* SearchBox */}
          {children}
        </body>
      </Providers>
    </html>
  );
}
