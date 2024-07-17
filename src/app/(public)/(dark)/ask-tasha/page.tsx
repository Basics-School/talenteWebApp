"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import TashaChat from "@/assets/images/Frame 5434.png";
import ChatLeft from "@/assets/images/chat-left.png";
import ChatLeft1 from "@/assets/images/chat-left.png";
import ChatRight from "@/assets/images/chat-right.png";
import ChatRight1 from "@/assets/images/chat-right.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";
import { Grid } from "@mui/material";
import TypingEffect from "@/common/TypingEffect";

const AskTashaPage = () => {
  return (
    <>
      <Box
        className="h-auto pt-28 lg:pt-12 flex justify-center relative sm:!overflow-hidden overflow-x-hidden"
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box
          className="flex text-[var(--white-text)] items-center justify-between gap-7 relative w-full px-2 sm:px-0"
          sx={{
            background: `url(${BgPattern.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box className="absolute bottom-6 -left-8 md:!-left-7 lg-left-16 spinCircle z-10 overflow-clip">
            <Image
              draggable="false"
              src={BlueCircle}
              alt="Blue Circle"
              className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[80px] !h-[80px] spinGlobe"
            />
          </Box>
          <Container className="sm:!justify-between sm:!flex lg:!mt-0 sm:!mb-0 mb-0">
            <Grid container className="space-y-16 md:space-y-0 items-center justify-between">
              <Grid xs={12} md={5}>
                <Box className="max-w-full sm:max-w-lg relative z-30 flex justify-center">
                  <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    className="h-full"
                  >
                    <Stack direction="column">
                      <Typography className="Spartan-SemiBold text-gradient1 text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-7xl !text-4xl">
                        Tired of
                      </Typography>
                      <Typography className="Spartan-SemiBold text-gradient1 text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-7xl !mb-1 !text-4xl">
                        company-centric
                      </Typography>
                      <Typography className="Spartan-SemiBold text-gradient1 text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-7xl !mb-1 !text-4xl">
                        HR Support?
                      </Typography>
                      <Typography className="Spartan-SemiBold text-gradient1 text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-7xl !mb-1 !text-4xl">
                        So are we.
                      </Typography>
                      <Typography className="text-[var(--white-text)] !mb-6">
                        <Typography className="Montserrat-Regular text-[20px]">
                          With Talente you control your career. Get as
                        </Typography>
                        <Typography className="Montserrat-Regular  text-[20px]">
                          little or as much HR and Career support as
                        </Typography>
                        <Typography className="Montserrat-Regular  text-[20px]">
                          you want. You decide.
                        </Typography>
                      </Typography>
                      <SecondaryButton text="Get Started" color="#FBCC3E" />
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid xs={12} md={7} className="relative">
                <Box className="">
                  <Box className="flex justify-center items-center">
                    <Image
                      src={TashaChat}
                      alt="Tasha image for Tasha page"
                      className="z-20 tab:w-[460px] md:w-[330px] lg:w-[460px] lg:h-[800px] tab:-mr-16 tab:h-[500px] h-[400px] object-contain object-bottom sm:!w-[800px] !w-[440px] bottom-0 tasha-phone-mobile"
                    />
                    <Box className="absolute top-0 lg:top-40 xl:left-[-50px] left-0 hidden tab:block">
                      <Image
                        src={ChatLeft}
                        alt=""
                        className="z-20 w-[240px] h-[123px] xl:w-[300px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] absolute top-[30px] left-4 pr-4 overflow-hidden">
                        <TypingEffect
                          text="Let's check! When was the start date of your current role?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-[6rem] lg:top-[initial] lg:bottom-64 xl:left-[-50px] -left-[20px] hidden tab:block">
                      <Image
                        src={ChatLeft1}
                        alt=""
                        className="z-20 w-[240px] h-[123px] xl:w-[300px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Do you work fulltime or parttime?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-0 lg:top-40 right-0 hidden tab:block">
                      <Image
                        src={ChatRight}
                        alt=""
                        className="z-20 w-[240px] h-[123px] xl:w-[300px] object-contain"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Am I eligible for an FMLA?"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                    <Box className="absolute top-[6rem] lg:top-[initial] lg:bottom-64 right-0 hidden tab:block">
                      <Image
                        src={ChatRight1}
                        alt=""
                        className="z-20 w-[240px] h-[100px] lg:h-[100px] xl:w-[300px] object-contain object-bottom"
                      />
                      <Box className="Spartan-Medium xl:text-[16px] text-[14px] z-20 h-[auto] top-[30px] left-4 pr-4 overflow-hidden absolute">
                        <TypingEffect
                          text="Sure. My first day was February 24, 2023"
                          speed={100}
                          deleteSpeed={30}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Image
          src={BlueCircle}
          alt="BlueCircle image for Tasha page"
          className="w-[110px] absolute bottom-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>
    </>
  );
};

export default AskTashaPage;
