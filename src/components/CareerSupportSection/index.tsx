import GradientTextCommon from "@/common/GradientTextCommon";
import GradientTextReverse from "@/common/GradientTextReverse";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CareerSupportImage from "@/assets/svg/CustomerSupportSection.svg";
import Container from "@/components/Container";
import CommonTextArea from "@/common/CommonTextArea";
import CustomerSupporttImg from "@/assets/images/CustomerSupportImg.png";
import Arrow from "@/assets/svg/Arrow.svg";

const CareerSupportSection = () => {
  return (
    <>
      <Image
        draggable="false"
        src={CareerSupportImage}
        alt="Blue Circle"
        className="absolute xl:!w-[400px] lg:!w-[200px] !w-[150px]"
      />
      <Container>
        <Box className="flex flex-col justify-center items-center !mt-20">
          <GradientTextReverse text="Feeling stuck in the job market?" className="xl:!mb-1 z-20" />
          <GradientTextCommon
            text="We’re here to change that!"
            className="md:!mt-6 !mt-1 xl:!text-6xl lg:!text-5xl md:!text-4xl !text-2xl"
          />
          <Box className="flex md:!flex-row !flex-col !mt-6 !px-8 md:!gap-0 !gap-4">
            <div className="borderImg">
              <Image
                draggable="false"
                src={CustomerSupporttImg}
                alt="Customer Support Image"
                // className="lg:!w-[260px] lg:!h-[260px] md:!w-[220px] md:!h-[300px] !w-[200px] !h-[200px] z-20 !mx-auto"
              />
            </div>
            <Image
              draggable="false"
              src={Arrow}
              alt="Blue Circle"
              className="absolute xl:!w-[100px] lg:!w-[70px] !w-[50px] xl:!right-[17.75rem] md:!right-[8rem] !right-[3rem] xl:!mt-8 !-mt-2"
            />
            <CommonTextArea
              heading="Customized career support"
              content="Get access to tailored resume optimization, interview coaching, career counseling, and professional development. Use our advanced tools and resources to stay ahead in your career."
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CareerSupportSection;
