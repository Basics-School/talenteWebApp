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
import Container from "@/components/Container";

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
          className="absolute left-0 -top-8 lg:!w-[250px] lg:!h-[250px] sm:!w-[200px] sm:!h-[200px] !w-[150px] !h-[150px] animates"
        />
        {/* Left Arrow */}
        <Image
          draggable="false"
          src={LeftArrow}
          alt="Left Arrow"
          className="absolute md:!top-24 lg:!right-48 sm:!right-32 !top-16 !right-16 lg:!w-[70px] lg:!h-[70px] md:!w-[55px] md:!h-[55px] !w-[45px] !h-[45px]"
        />
        {/* Decor Image */}
        <Image
          draggable="false"
          src={Decor}
          alt="Decor"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:!h-[800px] sm:!h-[670px] !h-[1000px]"
        />
        {/* Right Arrow */}
        <Image
          draggable="false"
          src={RightArrow}
          alt="Right Arrow"
          className="absolute sm:!top-24 lg:!left-44 sm:!left-32 md:!top-24 !top-16 !left-16 lg:!w-[70px] lg:!h-[70px] md:!w-[55px] md:!h-[55px] !w-[45px] !h-[45px]"
        />
        <Container>
          <Box className="!text-center">
            <AnimatedGradientText
              text="Experience The Talente Difference"
              className="md:!pt-12 !pt-6 lg:!mb-0 md:!pb-10 !pb-10 !mt-0"
            />
            <Box className="flex sm:!flex-row xs:!flex-col gap-4 justify-center !items-center">
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
        </Container>
      </Box>

      {/* Globe */}
      <Box className="absolute lg:!-bottom-40 lg:!-left-36 md:!-bottom-20 md:!-left-52 !-bottom-10 !-left-24 z-10">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="lg:!w-[380px] lg:!h-[410px] !w-[200px] !h-[250px] spinGlobe"
        />
      </Box>
    </Box>
  );
};

export default ExperienceSection;
