import React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Image from "next/image";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImage2.png";
import GradientTextCommon from "@/common/GradientTextCommon";
import DottedArrow from "@/assets/svg/DottedArrow.svg";

const CareerGuideSection = () => {
  return (
    <Container className="mb-12">
      <Box className="flex flex-col justify-center lg:!mt-20 md:!mt-12 !mt-8 xl:!px-0 !px-8">
        <GradientTextCommon
          text="We’re your ultimate career guide"
          className="!mb-1 !mx-auto xl:!text-6xl lg:!text-5xl md:!text-4xl !text-2xl"
        />
        <Image
          draggable="false"
          src={DottedArrow}
          alt="Customer Support Image"
          className="lg:!w-[100px] !w-[70px] xl:!ml-[16rem] md:!ml-[5rem] !mt-1"
        />
        <Box className="flex md:!flex-row !flex-col !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
          <CommonTextArea
            heading="We help you win at work"
            content="As a member of the Talente community you get guidance on complex work-related issues, insights into marketable skills, the latest industry trend & updated, personalized guidance to maximize employer-sponsored benefited like employee assistance programs and 401Ks"
            className="xl:!text-3xl lg:!text-xl !text-lg"
          />
          <Box className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute rounded-full h-[260px] w-[260px] z-[-1px] bg-[var(--bg-gradient-color)] left-[-4px] sm:left-[-20px] bottom-[-4px]  sm:bottom-[-20px] top-[24px]" />
              <Image
                draggable="false"
                src={CareerGuideImage}
                alt="Customer Support Image"
                width={260}
                height={260}
                className="mt-2 sm:mt-1 border-[18px] bg-slate-200 border-white rounded-full relative z-1"
              />
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CareerGuideSection;
