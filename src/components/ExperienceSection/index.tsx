"use client";
import Box from "@mui/material/Box";
import React from "react";
import ExperinceSectionCards from "@/common/ExperienceSectionCards";
import AnimatedGradientText from "@/common/AnimatedGradientText";
import Image from "next/image";
import Decor from "@/assets/svg/ExperienceSecetionDecor.svg";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import RightArrow from "@/assets/svg/RightArrow.svg";
import LeftArrow from "@/assets/svg/LeftArrow.svg";
import Globe from "@/assets/svg/Globe.svg";

const points1 = [
  "Career Accelaration Master Classes",
  "Personalized Career Coaching",
  "Virtual Networking Events",
];

const points2 = [
  "Compensation Analysis and Trends",
  "Core Competency Assessment",
  "Optimize Employer-Sponsored Benefits",
];

const points3 = [
  "Job Search Assistance",
  "Live Webinars from Industry Experts",
  "Industry Trends Updates",
];

const ExperienceSection = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color)) !important",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "3rem",
      }}
    >
      <Box className="relative">
        <Image
          draggable="false"
          src={DottedCircle}
          alt="Dotted Circle"
          className="absolute left-0 top-0 xl:!h-[200px] xl:!w-[200px] !w-[150px] !h-[150px] animates"
        />
        {/* Left Arrow */}
        <Image
          draggable="false"
          src={LeftArrow}
          alt="Left Arrow"
          className="absolute top-28 xl:!right-40 !right-24 xl:!h-[70px] xl:!w-[70px] !w-[50px] !h-[50px]"
        />
        {/* Decor Image */}
        <Image
          draggable="false"
          src={Decor}
          alt="Decor"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:!h-[800px] !h-[700px]"
        />
        {/* Right Arrow */}
        <Image
          draggable="false"
          src={RightArrow}
          alt="Right Arrow"
          className="absolute top-28 xl:!left-40 !left-24 xl:!h-[70px] xl:!w-[70px] !w-[50px] !h-[50px]"
        />
        <Box className="!text-center">
          <AnimatedGradientText
            text="Experience The Talente Difference"
            className="!pt-12 !pb-20 !mt-0"
          />
          <Box className="flex md:!flex-row !flex-col gap-4 justify-center !items-center">
            <ExperinceSectionCards
              cardNum="#01"
              points={points1}
              text="Performance"
              subText="Accelaration"
            />
            <ExperinceSectionCards
              cardNum="#02"
              points={points2}
              text="Compensation"
              subText="Benchmarking"
            />
            <ExperinceSectionCards
              cardNum="#03"
              points={points3}
              text="Career"
              subText="Advancement"
            />
          </Box>
        </Box>
      </Box>

      {/* Globe */}
      <Box className="absolute xl:!-bottom-36 lg:-bottom-32 -bottom-24 -left-52 xl:!-left-32 lg:!-left-36 z-10">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="xl:!w-[380px] xl:!h-[410px] lg:!w-[300px] lg:!h-[350px] !w-[250] !h-[270px] spinGlobe"
        />
      </Box>
    </Box>
  );
};

export default ExperienceSection;
