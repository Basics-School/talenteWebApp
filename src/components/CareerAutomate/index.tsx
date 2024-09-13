import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import CommonTextArea from "@/common/CommonTextArea";
import AutomateImg from "@/assets/images/automate.png";
import Arrow from "@/assets/svg/Arrow.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";

const CareerAutomate = () => {
  return (
    <>
      <Box className={"relative pb-7 overflow-hidden"}>
        <Container>
          <Box className="flex relative flex-col mt-10 md:mt-0 justify-center xl:!px-0 tab:!px-8 max-w-[1280px] mx-auto">
            <Box className="flex md:!flex-row !flex-col items-center pb-0 md:pb-20 lg:!gap-20 md:!gap-10 !gap-6 relative">
              <Image
                draggable="false"
                src={ArrowRight}
                alt="Arrow Right"
                className="absolute bottom-0 right-[-50px] lg:!w-[65px] lg:!h-[120px] !w-[50px] hidden md:block !h-[200px] animates z-10"
              />
              <div className="md:border-[2rem] sm:border-[1.2rem] border-8 border-amber-400 rounded-full my-10 mx-auto">
                <Image
                  draggable="false"
                  src={AutomateImg}
                  alt="Automate Your Career Management Image"
                />
              </div>
              <Image
                draggable="false"
                src={Arrow}
                alt="Blue Circle"
                className="absolute xl:!w-[100px] lg:!w-[70px] !w-[50px] xl:!right-[8.75rem] md:!right-[8rem] !right-[3rem]"
              />
              <CommonTextArea
                className="pl-0 md:pl-26"
                heading="10X HR and Career Management with smart automation."
                content="Our proprietary Career and Human Resources System surpasses traditional HRIS and ATS by offering a comprehensive solution that follows the full lifecycle of the employment journey."
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CareerAutomate;
