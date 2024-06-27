import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImage.png";
import GradientTextCommon from "@/common/GradientTextCommon";
import DottedArrow from "@/assets/svg/DottedArrow.svg";

const CareerGuideSection = () => {
  return (
    <>
      <Box className="flex flex-col justify-center !mt-20">
        <GradientTextCommon text="We’re your ultimate career guide" className="!mb-1 !mx-auto" />
        <Image
          draggable="false"
          src={DottedArrow}
          alt="Customer Support Image"
          className="!w-[120px] !ml-[16rem]"
        />
        <Box className="flex flex-row !w-full !justify-center gap-20">
          <CommonTextArea
            heading="We help you win at work"
            content="As a member of the Talente community you get guidance on complex work-related issues, insights into marketable skills, the latest industry trend & updated, personalized guidance to maximize employer-sponsored benefited like employee assistance programs and 401Ks"
          />
          <Image
            draggable="false"
            src={CareerGuideImage}
            alt="Customer Support Image"
            className="!w-[500px] !h-[550px]"
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerGuideSection;
