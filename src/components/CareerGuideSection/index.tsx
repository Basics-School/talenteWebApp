import React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Image from "next/image";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImg2.svg";
import DottedArrow from "@/assets/svg/DottedArrow.svg";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
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
            {/* <GradientTextCommon
              text="We help you win at work."
              className="!mb-1 !mx-auto xl:!text-[55px] lg:!text-5xl md:!text-4xl !text-2xl text-center"
            /> */}
            <Image
              draggable="false"
              src={DottedArrow}
              alt="Customer Support Image"
              className="lg:!w-[100px] !w-[70px] xl:ml-[-2rem]  lg:ml-[-3rem] md:ml-[1rem] sm:ml-[2rem] ml-4"
            />
          </Stack>
          <Box className="relative flex md:!flex-row !flex-col !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
            <Image
              draggable="false"
              src={ArrowLeft}
              alt="Arrow Left"
              className="absolute bottom-12 left-0 lg:!w-[50px] lg:!h-[200px] hidden md:block !w-[50px] !h-[200px] animates z-10"
            />
            <CommonTextArea
              heading="We help you win at work"
              content="Get help with complex work-related issues, insights into marketable skills, the latest industry trend & updates, personalized guidance to maximize employer-sponsored benefits like Employee Assistance Programs and 401Ks"
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
        alt="PurpleCircle image for Tasha page"
        className="absolute xl:!w-[110px] xl:!left-[-3rem] xl:!bottom-[7rem] lg:!w-[90px] lg:!left-[-3rem] lg:!bottom-[6rem] md:w-[70px] md:!left-[-2rem] md:!bottom-[2rem] sm:w-[60px] sm:!left-[-2rem] sm:!bottom-[16rem] tab:!bottom-[14rem] w-[50px] !left-[-2rem] !bottom-[18rem] spinGlobe"
      />
    </Box>
  );
};
export default CareerGuideSection;
