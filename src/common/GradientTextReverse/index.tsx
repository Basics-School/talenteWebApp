"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientTextReverseProps {
  text: string;
  className?: string;
}

const GradientTextReverse = ({ text, className }: GradientTextReverseProps) => {
  const GradientText = styled(Typography)({
    background: "linear-gradient(to right, var(--bg-gradient-color), var(--black-color))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    maxWidth: "1200px",
    paddingLeft: "20px",
    paddingRight: "20px",
  });

  return (
    <>
      <GradientText
        className={`Spartan-SemiBold tracking-wide !normal-case flex text-gradient xl:!text-6xl lg:!text-5xl !text-4xl ${className}`}
      >
        {text}
      </GradientText>
    </>
  );
};

export default GradientTextReverse;
