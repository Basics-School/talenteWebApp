import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import TashaChat from "@/assets/images/tasha-hr-phone.png";
import LetsCheck from "@/assets/svg/lets-check.svg";
import FullTime from "@/assets/svg/fulltime-parttime.svg";
import FMLA from "@/assets/svg/fmla.svg";
import February from "@/assets/svg/first-day-february.svg";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";
import { Grid } from "@mui/material";

const AskTashaPage = () => {
  return (
    <>
      <Box
        className="h-auto pt-32 md:h-[100vh] flex justify-center relative sm:!overflow-hidden overflow-x-hidden"
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
            <Grid container className="space-y-10 md:space-y-0 items-center justify-between">
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
                      className="z-20 lg:!w-[250px] md:h-[800px] h-[300px] object-contain object-bottom md:!w-[250px] sm:!w-[800px] !w-[250px] bottom-0 tasha-phone-mobile"
                    />
                    <Image
                      src={LetsCheck}
                      alt=""
                      className="z-20 w-[150px] h-[150px] md:w-[300px] md:h-[200px] left-[-20px] animate-yy-move top-20 object-contain object-bottom absolute hidden md:block"
                    />
                    <Image
                      src={FullTime}
                      alt=""
                      className="z-20 w-[150px] h-[150px] md:w-[300px] md:h-[200px] left-[-20px] animate-yy-move bottom-30 object-contain object-bottom absolute hidden md:block"
                    />
                    <Image
                      src={FMLA}
                      alt=""
                      className="z-20 w-[150px] h-[150px] md:w-[300px] md:h-[200px] right-0 animate-y-move top-20 object-contain object-bottom absolute hidden md:block"
                    />
                    <Image
                      src={February}
                      alt=""
                      className="z-20 w-[150px] h-[150px] md:w-[300px] md:h-[200px] right-0 animate-yy-move bottom-30 object-contain object-bottom absolute hidden md:block"
                    />
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
