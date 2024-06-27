"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientTextCommonProps {
  text: string;
  className?: string;
}

const GradientTextCommon = ({ text, className }: GradientTextCommonProps) => {
  const GradientText = styled(Typography)({
    background: "linear-gradient(to right, var(--black-color), var(--bg-gradient-color))",
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
        className={`Spartan-SemiBold tracking-wide !normal-case flex text-gradient xl:!text-7xl !text-sm ${className}`}
      >
        {text}
      </GradientText>
    </>
  );
};

export default GradientTextCommon;
