"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, var(--button-shadow), var(--white-text))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  maxWidth: "1200px",
});

const AnimatedGradientText = ({ text, className, as }: GradientProps) => {
  return (
    <GradientText
      as={as}
      className={`Spartan-SemiBold mb-5 sm:text-4xl md:!leading-[1.4] text-[25px] !text-center overflow-wrap break-words !mx-auto xl:!mt-4 !mt-3 px-[10px] ${className}`}
    >
      <span className="text-gradient1">{text}</span>
    </GradientText>
  );
};

export default AnimatedGradientText;
