"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientProps {
  text: string;
  className?: string;
}

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, var(--button-shadow), var(--white-text))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  maxWidth: "1200px",
});

const AnimatedGradientText = ({ text, className }: GradientProps) => {
  return (
    <GradientText
      className={`Spartan-SemiBold lg:text-5xl lg:!leading-[3.7rem] sm:text-4xl md:!leading-[3.2rem] text-[25px] !text-center overflow-wrap break-words !mx-auto xl:!mt-4 !mt-3 px-[10px] ${className}`}
    >
      <span className="text-gradient1">{text}</span>
    </GradientText>
  );
};

export default AnimatedGradientText;
