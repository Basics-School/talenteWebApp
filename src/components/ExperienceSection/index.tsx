"use client";
import Box from "@mui/material/Box";
import React from "react";
import ExperinceSectionCards from "@/common/ExperienceSectionCards";
import Image from "next/image";
// import DottedCircle from "@/assets/svg/DottedCircle.svg";
import Container from "@/components/Container";
import { Typography } from "@mui/material";
import SingleArrow from "@/assets/images/Single_Arrow90.png";
import DoubleArrow from "@/assets/images/Double_Arrow90.png";

const points1: string[] = [];

const points2: string[] = [
  "Job search",
  "Resume Optimization",
  "Interview Preparation",
  "Company Research",
  "Track Career Milestones",
  "Employment Law",
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
        position: "relative",
        overflow: "hidden",
        paddingBottom: "3rem",
      }}
    >
      <Box className="relative">
        <Container>
          <Box className="!text-center">
            <h2 className="text-white Spartan-SemiBold md:!pt-12 !pt-6 lg:!mb-0 md:!pb-6 !pb-6 !mt-0">
              A single platform where everything works together.
            </h2>
            <Typography className="Montserrat-Regular !mx-auto mb-10 !text-[--white-text] xl:text-[20px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
              Talente saves you time and effort, helping you focus on skill development, enhancing
              performance, and achieving meaningful career or organizational progress.
            </Typography>
            <Box className="grid tab:grid-cols-3 gap-4 justify-center !items-center relative">
              <ExperinceSectionCards
                cardNum="1"
                points={points1}
                text="Onboard"
                subText="Create your profile"
                img={"/images/platform/onboard.png"}
                detailText="Create a profile or login with LinkedIn or Google integration. "
                num={1}
              />
              <Box className="absolute left-1/3 top-16 -translate-x-1/2 w-[70px] hidden tab:block">
                <Image src={SingleArrow} alt="Single Arrow" className="w-full" />
              </Box>
              <Box className="absolute left-2/3 top-16 -translate-x-1/2 w-[70px] hidden tab:block">
                <Image src={DoubleArrow} alt="Double Arrow" className="w-full" />
              </Box>

              <ExperinceSectionCards
                cardNum="2"
                points={points2}
                text="Optimize"
                subText="Manage Repetitive tasks"
                img={"/images/platform/optimize.png"}
                detailText="Automate career tasks like:"
                num={2}
              />
              <ExperinceSectionCards
                cardNum="3"
                points={points3}
                text="Integrate"
                subText="HRIS or ATS with API"
                img={"/images/platform/integrate.png"}
                detailText="API integration lets you maintain the flow of your career data. On-demand assistance for:"
                num={3}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
