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
      <Box className="Spartan-Bold xl:!text-[2.5rem] lg:!text-3xl !text-xl !mb-2">{heading}</Box>
      <Box
        sx={{
          background: "linear-gradient(90deg, #000, #5E17EB8F)",
        }}
        className="max-h-[460px] m-auto my-4 md:my-6 h-1 bg-gradient-to-r from-black via-[#5E17EB8F] to-[#5E17EB8F] xl:max-w-[300px] md:!max-w-[170px] !max-w-[125px]"
      />
      <Box
        className={`Spartan-Medium lg:text-2xl text-lg  max-w-[800px] !mt-2 lg:!leading-8 ${className}`}
      >
        {content}
      </Box>
    </Box>
  );
};

export default CommonTextArea;
