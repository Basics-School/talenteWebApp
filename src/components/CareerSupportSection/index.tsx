import GradientTextCommon from "@/common/GradientTextCommon";
import GradientTextReverse from "@/common/GradientTextReverse";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CareerSupportImage from "@/assets/svg/CustomerSupportSection.svg";
import CommonTextArea from "@/common/CommonTextArea";
import CustomerSupporttImage from "@/assets/images/CustomerSupportImage.png";
import Arrow from "@/assets/svg/Arrow.svg";

const CareerSupportSection = () => {
  return (
    <>
      <Image
        draggable="false"
        src={CareerSupportImage}
        alt="Blue Circle"
        className="absolute !w-[400px]"
      />
      <Box className="flex flex-col justify-center items-center !mt-20">
        <GradientTextReverse text="Feeling stuck in the job market?" className="!mb-1 z-20" />
        <GradientTextCommon text="We’re here to change that!" className="!mt-6" />
        <Box className="flex flex-row !mt-6">
          <Image
            draggable="false"
            src={CustomerSupporttImage}
            alt="Customer Support Image"
            className="!w-[620px] !h-[620px] z-20"
          />
          <Image
            draggable="false"
            src={Arrow}
            alt="Blue Circle"
            className="absolute !w-[100px] right-[17.75rem] !mt-8"
          />
          <CommonTextArea
            heading="Customized career support"
            content="Get access to tailored resume optimization, interview coaching, career counseling, and professional development. Use our advanced tools and resources to stay ahead in your career."
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerSupportSection;
