import React from "react";
import Navbar from "@/components/Navbar";
import BlackTalenteLogo from "@/assets/svg/BlackTalenteLogo.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar logo={BlackTalenteLogo} navColor="var(--white-text)" />
      {children}
    </>
  );
}
