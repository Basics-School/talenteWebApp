import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NotistackProvider from "@/utils/Notistack/NotiStackProvider";
import "react-international-phone/style.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Talente | Fast, confidential, and personalized support whenever you need it, helping you find better career opportunities.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body className={inter.className}>
        <NotistackProvider>
          <Navbar />
          {children}
        </NotistackProvider>
      </body>
    </html>
  );
}
