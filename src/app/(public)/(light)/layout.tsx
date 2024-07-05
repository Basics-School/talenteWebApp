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
      <Navbar
        color="var(--black-color)"
        logo={BlackTalenteLogo}
        scrollColor={"var(--section-color)"}
      />
      {children}
    </>
  );
}
