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
import ImageDiv from "@/common/ImageDiv";

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
              heading="Enhance equitable governance."
              content="On-demand support for work-related challenges, insights into marketable skills, up-to-date industry trends, and personalized guidance to optimize employer-sponsored benefits such as Employee Assistance Programs and 401Ks, all while enhancing corporate governance and compliance."
            />
            <ImageDiv ImgSrc={CareerGuideImage} ImgAlt="Customer Support Image" />
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
