import Box from "@mui/material/Box";
import React from "react";

interface TextAreaProps {
  heading: string;
  content: string;
}

const CommonTextArea = ({ heading, content }: TextAreaProps) => {
  return (
    <Box className="!text-center !my-auto">
      <Box className="Spartan-Bold !text-5xl !mb-2">{heading}</Box>
      <Box
        sx={{
          maxWidth: "300px",
          maxHeight: "460px",
          margin: "auto",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          height: "4px",
          background: "linear-gradient(90deg, #000, #5E17EB8F)",
        }}
      />
      <Box className="Spartan-Medium !text-3xl max-w-[800px] !mt-2 leading-8">{content}</Box>
    </Box>
  );
};

export default CommonTextArea;
