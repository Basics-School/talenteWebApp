import GradientTextReverse from "@/common/GradientTextReverse";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import Container from "@/components/Container";
import CommonTextArea from "@/common/CommonTextArea";
import CustomerSupporttImg from "@/assets/images/CustomerSupportImg_450.png";
import Arrow from "@/assets/svg/Arrow.svg";

const CareerSupportSection = () => {
  return (
    <>
      <Box className={"relative pb-7 overflow-hidden"}>
        {/* <Image
          draggable="false"
          src={CareerSupportImage}
          alt="Blue Circle"
          className="absolute xl:!w-[400px] lg:!w-[200px] !w-[150px]"
        /> */}
        <Image
          draggable="false"
          src={DottedCircle}
          alt="Dotted Image"
          className="absolute top-0 left-0 lg:!w-[250px] lg:!h-[250px] !w-[150px] !h-[150px] animates z-10"
        />
        <Container>
          <Box className="flex flex-col justify-center items-center !pt-16 max-w-[950px] mx-auto">
            <GradientTextReverse
              text="Why Talente is the smarter choice."
              className="xl:!mb-1 z-20"
            />
            {/* <GradientTextCommon
              text="We’re here to change that!"
              className="md:!mt-[0] !mt-1 xl:!text-[45px] lg:!text-5xl md:!text-4xl !text-2xl !leading-[1.7rem]"
            /> */}
            <Box className="flex md:!flex-row !flex-col !mt-10 !px-8 md:!gap-0 !gap-4 relative">
              <Image
                draggable="false"
                src={ArrowRight}
                alt="Arrow Right"
                className="absolute bottom-0 right-0 lg:!w-[65px] hidden md:block lg:!h-[200px] !w-[50px] !h-[200px] animates z-10"
              />
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
                className="absolute xl:!w-[80px] lg:!w-[70px] !w-[50px] xl:!right-[0rem] md:!right-[8rem] top-0 !right-[2rem] xl:!mt-0 !-mt-2"
              />
              <CommonTextArea
                className="pl-0 md:pl-5"
                heading="Your employment data ALL in one place."
                content="Track your achievements and milestones. Keep your employment data secure and easily accessible for career management and planning. Make documenting and recordkeeping effortless."
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CareerSupportSection;
