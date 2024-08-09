import React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Image from "next/image";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImage_2x-t.png";
import DottedArrow from "@/assets/svg/DottedArrow.svg";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import PurpleCircle from "@/assets/svg/PurpleCircle.svg";
import Stack from "@mui/material/Stack";

const CareerGuideSection = () => {
  return (
    <Box className="relative">
      <Container>
        <Box className="flex relative flex-col mt-10 md:mt-0 justify-center xl:!px-0 tab:!px-8 max-w-[1280px] mx-auto">
          <Stack
            className="max-w-4xl mx-auto"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* <GradientTextCommon
              text="We help you win at work."
              className="!mb-1 !mx-auto xl:!text-[55px] lg:!text-5xl md:!text-4xl !text-2xl text-center"
            /> */}
            <Image
              draggable="false"
              src={DottedArrow}
              alt="Customer Support Image"
              className="lg:!w-[100px] !w-[70px] xl:ml-[-2rem] lg:ml-[-3rem] md:ml-[1rem] sm:ml-[2rem] ml-4 relative mb-2 md:-bottom-10"
            />
          </Stack>
          <Box className="relative flex md:!flex-row !flex-col-reverse items-center pb-0 md:pb-10 !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
            <Image
              draggable="false"
              src={ArrowLeft}
              alt="Arrow Left"
              className="absolute bottom-0 left-[-50px] lg:!w-[65px] lg:!h-[120px] hidden md:block !w-[50px] !h-[200px] animates z-10"
            />
            <CommonTextArea
              heading="We help you win at work"
              content="Get help with complex work-related issues, insights into marketable skills, the latest industry trend & updates, personalized guidance to maximize employer-sponsored benefits like Employee Assistance Programs and 401Ks"
              className="pl-0 md:pl-5"
            />
            <Box className="relative flex-none xl:!mb-14 lg:!mb-12 !mx-auto !mb-7 borderlessImg">
              <Image
                draggable="false"
                src={CareerGuideImage}
                alt="Customer Support Image"
                className="!bg-[var(--section-color)] !relative z-10 border-[8px] border-[--white-text] !rounded-full xl:!mb-24 xl:!border-[15px] lg:!border-[13px] lg:!mb-12 md:!border-[9px] md:!mb-4 !mx-auto"
              />
              <Box className="!absolute z-2 !bg-[--bg-gradient-color] !rounded-full min-[1440px]:w-[380px] min-[1440px]:h-[380px] xl:!left-[-18px] xl:!top-[29px] lg:!w-[275px] lg:!h-[275px] lg:!left-[-16px] lg:!top-[34px] min-[1024px]:w-[230px] min-[1024px]:h-[230px] !left-[-10px] !top-[16px]  md:!left-[-12px] tab:top-[25px] tab:!w-[180px] tab:!h-[180px] !mx-auto !w-[190px] !h-[190px]" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Image
        src={PurpleCircle}
        alt="PurpleCircle image for Tasha page"
        className="absolute xl:!w-[110px] xl:!left-[-3rem] xl:!bottom-[7rem] lg:!w-[90px] lg:!left-[-3rem] lg:!bottom-[6rem] md:w-[70px] md:!left-[-2rem] md:!bottom-[2rem] sm:w-[60px] sm:!left-[-2rem] sm:!bottom-[16rem] tab:!bottom-[14rem] w-[50px] !left-[-2rem] !bottom-[18rem] spinGlobe"
      />
    </Box>
  );
};
export default CareerGuideSection;
