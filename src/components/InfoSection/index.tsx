"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { default as MuiButton } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import BannerImg from "@/assets/images/HomeHero.png";
import { Grid } from "@mui/material";
import Container from "@/components/Container";
import Button from "../Button";

const GradientTextButton = styled(MuiButton)(({}) => ({
  textTransform: "none",
  margin: "0 auto",
  display: "flex",
  borderRadius: "9999px",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "2px solid linear-gradient(45deg, #004AAD, #CB6CE6)",
  padding: "0.75rem 2rem",
  "&::before": {
    content: "' '",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "9999px",
    padding: "2px",
    background: "linear-gradient(45deg, #004AAD, #CB6CE6)",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
  },
}));

const InfoSection = () => {
  return (
    <Box className="flex flex-col lg:!gap-10 mt-28 md:mt-20 !gap-8 !mx-auto mb-[-10px] w-full max-w-[1366px]">
      <Box>
        <Container>
          <Grid container className="space-y-10 md:space-y-0 items-center justify-between">
            <Grid xs={12} md={7} className="md:mb-20">
              <GradientTextButton className="Montserrat-Medium tracking-wide mb-8 ml-0 !normal-case flex justify-start text-gradient xl:text-[20px] lg:text-[20px] text-sm bg-[linear-gradient(to_right,theme(colors.pink.400),theme(colors.pink.100),theme(colors.white),theme(colors.pink.400),theme(colors.white),theme(colors.pink.100),theme(colors.pink.400))] bg-[length:200%_auto] animate-gradient bg-clip-text">
                AI-Powered Career Support
              </GradientTextButton>
              <h1 className="Spartan-SemiBold p-0 mb-6 overflow-wrap break-words">
                Human Resources and <br />
                Career Management together, in one place.
              </h1>
              <p className="xl:w-4/5 Montserrat-Regular mb-6 !text-[--white-text] lg:text-lg text-sm leading-tight">
                On-demand HR and Career Services support. Through Talente. Right into an Applicant
                Tracking System (ATS) or Human Resources Information System (HRIS).
              </p>
              <Box className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                <Box className="bg-white flex flex-col justify-between sm:py-4 py-2.5 sm:px-6 px-4 rounded-xl">
                  <div className="text-left">
                    <span className="bg-cyan-600 uppercase font-extrabold py-0.5 sm:px-6 px-4 md:text-lg text-base rounded">
                      new
                    </span>
                    <h2 className="font-extrabold text-black md:text-3xl text-2xl sm:mt-2 mt-1">
                      Meet Tasha
                    </h2>
                    <p className="Montserrat-Medium md:text-2xl leading-none text-black sm:mt-4 mt-2">
                      Meet Tasha 1.0, our AI Assistant that will revolutionize the future of work.
                    </p>
                  </div>
                  <Button
                    openDialog
                    className="w-fit mx-auto bg-black text-white sm:mt-3 mt-2 py-1.5 sm:px-9 px-6 rounded-full uppercase font-bold md:text-2xl sm:text-xl text-lg shadow-lg shadow-black/15"
                  >
                    learn more
                  </Button>
                </Box>
                <Box className="text-black bg-white flex flex-col justify-between sm:py-4 py-2.5 sm:px-6 px-4 rounded-xl">
                  <div className="text-left">
                    <h2 className="font-extrabold md:text-3xl text-2xl mt-2">API</h2>
                    <p className="Montserrat-Medium md:text-2xl leading-none text-black sm:mt-4 mt-2">
                      Tasha integrates with existing HRIS and ATS through APIs, serving as a Career
                      and HR copilot.
                    </p>
                  </div>
                  <Button
                    openDialog
                    className="w-fit mx-auto bg-[#ffb54d] sm:mt-3 mt-2 py-1.5 sm:px-9 px-6 rounded-full uppercase font-bold md:text-2xl sm:text-xl text-lg shadow-lg shadow-black/15"
                  >
                    REQUEST DEMO
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={5} className="z-20">
              <Image
                src={BannerImg}
                alt="Banner Image"
                height={650}
                loading="eager"
                className="mx-auto h-[400px] tab:!h-[460px] lg:!h-[650px] object-contain object-bottom"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default InfoSection;
