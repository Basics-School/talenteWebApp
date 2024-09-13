import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import Container from "@/components/Container";
import CommonTextArea from "@/common/CommonTextArea";
import CustomerSupporttImg from "@/assets/images/1.png";
import Arrow from "@/assets/svg/Arrow.svg";
import { Typography } from "@mui/material";

const WhoForSection = () => {
  return (
    <>
      <Box className={"relative pt-10 lg:pt-20 pb-0"}>
        <Image
          draggable="false"
          src={DottedCircle}
          alt="Dotted Image"
          className="absolute top-0 left-0 lg:!w-[250px] lg:!h-[250px] !w-[150px] !h-[150px] animates z-10"
        />
        <Container>
          <Box className="flex relative flex-col justify-center lg:!mt-10 md:!mt-12 mt-5 xl:!px-0 tab:!px-8 max-w-[1280px] mx-auto">
            <h2 className="Spartan-Bold tracking-wide !normal-case xl:!mb-1 z-20 mx-auto text-center">
              Team up with Talente
            </h2>
            <Typography className="Montserrat-Regular lg:w-3/5 text-center !mx-auto mb-10 !text-[--white-text] xl:text-[20px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
              Shorten the path from idea to impact with an AI assistant that taps into your shared
              expertise.
            </Typography>
            <Box className="flex md:!flex-row !flex-col items-center pb-0 mt-5 tab:!mt-10 lg:!gap-20 md:!gap-10 !gap-6 relative">
              <Image
                draggable="false"
                src={ArrowRight}
                alt="Arrow Right"
                className="absolute -bottom-14 right-[-50px] lg:!w-[65px] hidden md:block lg:!h-[150px] !w-[50px] !h-[200px] animates z-10"
              />
              <div className="max-h-[445px] max-w-[445px] md:border-[2rem] sm:border-[1.2rem] border-8 border-amber-400 rounded-full overflow-hidden my-10 mx-auto">
                <Image draggable="false" src={CustomerSupporttImg} alt="Customer Support Image" />
              </div>
              <Image
                draggable="false"
                src={Arrow}
                alt="Blue Circle"
                className="absolute xl:!w-[80px] lg:!w-[70px] !w-[50px] xl:!right-[0rem] md:!right-[8rem] top-0 !right-[2rem] xl:!mt-0 !-mt-2"
              />
              <CommonTextArea
                heading="For Individuals"
                content="Personalized career insights, skill development resources, and real-time feedback tailored to your unique goals. Whether you’re navigating a job search or seeking growth within your current role, Talente offers the tools and guidance you need to take control of your career journey."
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhoForSection;
