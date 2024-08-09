"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientTextReverseProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const GradientTextReverse = ({ text, className, as }: GradientTextReverseProps) => {
  const GradientText = styled(Typography)({
    background: "linear-gradient(to right, var(--bg-gradient-color), var(--black-color))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    maxWidth: "1200px",
  });

  return (
    <>
      <GradientText
        as={as}
        className={`Spartan-Bold tracking-wide !normal-case flex text-gradient ${className}`}
      >
        {text}
      </GradientText>
    </>
  );
};

export default GradientTextReverse;
