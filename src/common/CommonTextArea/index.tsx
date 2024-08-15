import Box from "@mui/material/Box";
import React from "react";

interface TextAreaProps {
  heading: string;
  content: string;
  className?: string;
}

const CommonTextArea = ({ heading, content, className }: TextAreaProps) => {
  return (
    <Box className="!text-center md:!mt-5">
      <h2 className="Spartan-Bold md:mb-10">{heading}</h2>
      <Box
        sx={{
          background: "linear-gradient(90deg, #000, #5E17EB8F)",
        }}
        className="max-h-[460px] m-auto my-4 md:my-6 h-1 bg-gradient-to-r from-black via-[#5E17EB8F] to-[#5E17EB8F] xl:max-w-[300px] md:!max-w-[170px] !max-w-[125px]"
      />
      <p
        className={`Montserrat-Medium  max-w-[800px] md:text-2xl leading-none md:mt-10 ${className}`}
      >
        {content}
      </p>
    </Box>
  );
};

export default CommonTextArea;
