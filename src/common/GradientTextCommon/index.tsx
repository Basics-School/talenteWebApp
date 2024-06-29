"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { cn } from "@/lib/cn";

interface GradientTextCommonProps {
  text: string;
  className?: string;
  startColor?: string;
  endColor?: string;
}

const GradientTextCommon = ({
  text,
  className,
  startColor = "var(--black-color)",
  endColor = "var(--bg-gradient-color)",
}: GradientTextCommonProps) => {
  const GradientText = styled(Typography)({
    background: `linear-gradient(to right, ${startColor}, ${endColor})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    maxWidth: "1200px",
  });

  return (
    <>
      <GradientText
        className={cn("Spartan-SemiBold tracking-wide !normal-case flex text-gradient", className)}
      >
        {text}
      </GradientText>
    </>
  );
};

export default GradientTextCommon;
