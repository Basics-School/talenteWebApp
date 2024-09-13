"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Container from "@/components/Container";
import { Grid } from "@mui/material";
import TashaCapabilities from "@/components/TashaCapabilities";
import Button from "@/components/Button";

const AskTashaPage = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box className="h-auto pt-36 lg:pt-30 flex justify-center relative sm:!overflow-hidden overflow-x-hidden">
          <Box className="text-[var(--white-text)] relative w-full px-2 sm:px-0">
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
                <Grid xs={12} lg={6}>
                  <div>
                    <h1 className="Spartan-SemiBold p-0 mb-6 overflow-wrap break-words flex flex-wrap">
                      Meet <br />
                      Tasha.
                    </h1>
                    <p className="Montserrat-Regular text-white mb-6 lg:max-w-[600px] w-full leading-tight">
                      Tasha is your AI-powered career companion. Whether you’re navigating your
                      career path solo or managing a diverse team, Tasha is here to streamline your
                      journey and elevate your success.
                    </p>
                    <div className="flex sm:flex-row flex-col lg:gap-9 sm:gap-6 gap-4 sm:mt-9 mt-6">
                      <Button
                        openDialog
                        className="bg-white text-black uppercase text-center font-bold py-2 sm:px-6 px-4 md:text-lg text-base rounded-full"
                      >
                        create account
                      </Button>
                      <a className="bg-cyan-600 uppercase text-center font-bold py-2 sm:px-6 px-4 md:text-lg text-base rounded-full">
                        Get API access
                      </a>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} lg={6} className="relative">
                  <div className="relative max-w-[500px] w-full aspect-square mx-auto lg:mx-[initial] lg:ml-auto z-[1]">
                    <Image
                      src="/images/tasha/tasha-hero.png"
                      alt="tasha image"
                      fill
                      loading="eager"
                    />
                  </div>
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
        <TashaCapabilities />
      </Box>
    </>
  );
};

export default AskTashaPage;
