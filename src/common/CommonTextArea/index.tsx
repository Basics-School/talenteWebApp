import Box from "@mui/material/Box";
import React from "react";

interface TextAreaProps {
  heading: string;
  content: string;
  className?: string;
}

const CommonTextArea = ({ heading, content, className }: TextAreaProps) => {
  return (
    <Box className="md:!mt-5">
      <h2 className="Spartan-Bold md:mb-10 mb-4">{heading}</h2>
      <p
        className={`Montserrat-Medium  max-w-[800px] md:text-2xl leading-none md:mt-10 ${className}`}
      >
        {content}
      </p>
    </Box>
  );
};

export default CommonTextArea;
