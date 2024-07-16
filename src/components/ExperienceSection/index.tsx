"use client";
import Box from "@mui/material/Box";
import React from "react";
import ExperinceSectionCards from "@/common/ExperienceSectionCards";
import AnimatedGradientText from "@/common/AnimatedGradientText";
import Image from "next/image";
import Decor from "@/assets/svg/ExperienceSecetionDecor.svg";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import Globe from "@/assets/svg/Globe.svg";
import Container from "@/components/Container";
import { Typography } from "@mui/material";
import OnBoard from "@/assets/svg/onboard.svg?svgr";
import Optimize from "@/assets/svg/optimize.svg?svgr";
import Integrate from "@/assets/svg/integrate.svg?svgr";

const points1: string[] = [];

const points2: string[] = [
  "Job search",
  "Resume Optimization",
  "Interview Preparation",
  "Company Research",
  "Document Milestones",
  "Emoloyment Law",
  "Industry Watch",
];

const points3: string[] = [
  "PTO and LOA requests",
  "Payroll and Benefits",
  "Learning and Development",
  "Employee Relations",
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
        {/* <Image
          draggable="false"
          src={LeftArrow}
          alt="Left Arrow"
          className="absolute md:!top-24 lg:!right-48 sm:!right-32 !top-16 !right-16 lg:!w-[70px] lg:!h-[70px] md:!w-[55px] md:!h-[55px] !w-[45px] !h-[45px]"
        /> */}
        {/* Decor Image */}
        <Image
          draggable="false"
          src={Decor}
          alt="Decor"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:!h-[800px] sm:!h-[670px] !h-[1000px]"
        />
        {/* Right Arrow */}
        {/* <Image
          draggable="false"
          src={RightArrow}
          alt="Right Arrow"
          className="absolute sm:!top-24 lg:!left-44 sm:!left-32 md:!top-24 !top-16 !left-16 lg:!w-[70px] lg:!h-[70px] md:!w-[55px] md:!h-[55px] !w-[45px] !h-[45px]"
        /> */}
        <Container>
          <Box className="!text-center">
            <AnimatedGradientText
              text="A single platform where everything works together."
              className="md:!pt-12 !pt-6 lg:!mb-0 md:!pb-6 !pb-6 !mt-0"
            />
            <Typography className="Montserrat-Regular !mx-auto mb-10 !text-[--white-text] xl:text-[20px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
              Talente saves you time and effort so you can focus on what matters most—growing your
              skills, improving your earning power, and taking your career forward.
            </Typography>
            <Box className="grid tab:grid-cols-3 gap-4 justify-center !items-center">
              <ExperinceSectionCards
                cardNum="#01"
                points={points1}
                text="Onboard"
                subText="Create your profile"
                icon={<OnBoard />}
                detailText="Create your profile manually or with LinkedIn integration."
                num={1}
              />
              <ExperinceSectionCards
                cardNum="#02"
                points={points2}
                text="Optimize"
                subText="Manage Repetitive tasks"
                icon={<Optimize />}
                detailText="Automate career tasks like:"
                num={2}
              />
              <ExperinceSectionCards
                cardNum="#03"
                points={points3}
                text="Integrate"
                subText="HRIS or ATS with API"
                icon={<Integrate />}
                detailText="API integration lets you maintain the flow of your career data. On-demand assistance for:"
                num={3}
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
