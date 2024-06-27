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
      <Box className="flex flex-col justify-center !mt-20 xl:!px-0 !px-8">
        <GradientTextCommon text="We’re your ultimate career guide" className="!mb-1 !mx-auto" />
        <Image
          draggable="false"
          src={DottedArrow}
          alt="Customer Support Image"
          className="lg:!w-[100px] !w-[70px] xl:!ml-[16rem] !ml-[5rem] !mt-1"
        />
        <Box className="flex flex-row !w-full !justify-center lg:!gap-20 !gap-10">
          <CommonTextArea
            heading="We help you win at work"
            content="As a member of the Talente community you get guidance on complex work-related issues, insights into marketable skills, the latest industry trend & updated, personalized guidance to maximize employer-sponsored benefited like employee assistance programs and 401Ks"
            className="xl:!text-3xl lg:!text-xl !text-lg"
          />
          <Image
            draggable="false"
            src={CareerGuideImage}
            alt="Customer Support Image"
            className="xl:!w-[500px] xl:!h-[550px] lg:!w-[370px] lg:!h-[370px] !w-[290px] !h-[290px]"
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerGuideSection;
