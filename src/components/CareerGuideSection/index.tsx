import React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Image from "next/image";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImg2.svg";
import GradientTextCommon from "@/common/GradientTextCommon";
import DottedArrow from "@/assets/svg/DottedArrow.svg";
import PurpleCircle from "@/assets/svg/PurpleCircle.svg";
import Stack from "@mui/material/Stack";

const CareerGuideSection = () => {
  return (
    <Box className="relative">
      <Container>
        <Box className="flex relative flex-col justify-center lg:!mt-10 md:!mt-12 !mt-8 xl:!px-0 !px-8">
          <Stack
            className="max-w-4xl mx-auto"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <GradientTextCommon
              text="We're your ultimate career guide"
              className="!mb-1 !mx-auto xl:!text-[55px] lg:!text-5xl md:!text-4xl !text-2xl text-center"
            />
            <Image
              draggable="false"
              src={DottedArrow}
              alt="Customer Support Image"
              className="lg:!w-[100px] !w-[70px] xl:ml-[-2rem]  lg:ml-[-3rem] md:ml-[1rem] sm:ml-[2rem] ml-4"
            />
          </Stack>
          <Box className="relative flex md:!flex-row !flex-col !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
            <CommonTextArea
              heading="We help you win at work"
              content="As a member of the Talente community you get guidance on complex work-related issues, insights into marketable skills, the latest industry trend & updated, personalized guidance to maximize employer-sponsored benefited like employee assistance programs and 401Ks"
              className="xl:!text-2xl lg:!text-xl !text-lg"
            />
            <Box className="relative flex-none xl:!w-[300px] xl:!h-[300px] xl:!mb-14 lg:!w-[270px] lg:!h-[270px]  lg:!mb-12 md:!w-[230px] md:!h-[230px] !mx-auto !w-[180px] !h-[180px] !mb-7">
              <Image
                draggable="false"
                src={CareerGuideImage}
                alt="Customer Support Image"
                className="!bg-[var(--section-color)] !relative z-10 border-[8px] border-[--white-text] !rounded-full xl:!w-[300px] xl:!h-[300px] xl:!mb-24 xl:!border-[15px] lg:!w-[270px] lg:!h-[270px] lg:!border-[13px] lg:!mb-12 md:!w-[230px] md:!h-[230px] md:!border-[9px] md:!mb-4  !mx-auto !w-[180px] !h-[180px]"
              />
              <Box className="!absolute z-2 !bg-[--bg-gradient-color] !rounded-full xl:!w-[285px] xl:!h-[285px] xl:!left-[-18px] xl:!top-[29px] lg:!w-[255px] lg:!h-[255px] lg:!left-[-16px] lg:!top-[24px] !left-[-10px] !top-[16px]  md:!left-[-12px] md:top-[25px] md:!w-[215px] md:!h-[215px] !mx-auto !w-[170px] !h-[170px]" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Image
        src={PurpleCircle}
        alt="BlueCircle image for Tasha page"
        className="absolute xl:!w-[110px] !left-[-3rem] xl:!bottom-[7rem] lg:!w-[80px] !bottom-[15rem] spinGlobe w-[110px] md:w-[144px]"
      />
    </Box>
  );
};
export default CareerGuideSection;
