import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import CommonTextArea from "@/common/CommonTextArea";
import AutomateImg from "@/assets/images/automate.webp";
import Arrow from "@/assets/svg/Arrow.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";

const CareerAutomate = () => {
  return (
    <>
      <Box className={"relative pb-7 overflow-hidden"}>
        {/* <Image
          draggable="false"
          src={CareerSupportImage}
          alt="Blue Circle"
          className="absolute xl:!w-[400px] lg:!w-[200px] !w-[150px]"
        /> */}
        <Container>
          <Box className="flex flex-col justify-center items-center !pt-16">
            {/* <GradientTextCommon
              text="We’re here to change that!"
              className="md:!mt-[0] !mt-1 xl:!text-[45px] lg:!text-5xl md:!text-4xl !text-2xl !leading-[1.7rem]"
            /> */}
            <Box className="flex md:!flex-row !flex-col !mt-4 pb-10 !px-8 md:!gap-0 !gap-4 relative">
              <Image
                draggable="false"
                src={ArrowRight}
                alt="Arrow Right"
                className="absolute bottom-0 right-0 lg:!w-[50px] lg:!h-[200px] !w-[50px] hidden md:block !h-[200px] animates z-10"
              />
              <div className="borderImg">
                <Image
                  draggable="false"
                  src={AutomateImg}
                  alt="Automate Your Career Management Image"
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
                className="pl-0 md:pl-5"
                heading="Automate your career management."
                content="Repetitive career tasks like job search and resume writing has never been so easy. Need a referral? Network with other professionals in our Career Hub.  Manage work-related issues, saving time and reducing stress. 
"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CareerAutomate;
