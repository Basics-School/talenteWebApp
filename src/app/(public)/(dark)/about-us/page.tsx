import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import FounderImg from "@/assets/images/founder.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
import GradientTextReverse from "@/common/GradientTextReverse";

const AboutUs = () => {
  return (
    <>
      <Box
        className="!h-[100vh] flex justify-center relative sm:!overflow-hidden overflow-x-hidden"
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box
          className="flex text-[var(--white-text)] items-center gap-7 relative w-full px-2 sm:px-0"
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
          <Container className="sm:!justify-between sm:!flex items-center lg:!mt-0 sm:!mb-0 !mb-32">
            <Box className="max-w-full relative z-30 flex justify-center w-full tab:w-1/2 lg:w-auto">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                className="h-full"
              >
                <Stack direction="column">
                  <Typography className="Spartan-SemiBold uppercase text-[var(--white-text)] sm:!text-2xl md:!text-3xl lg:!text-4xl !text-4xl">
                    Our Story
                  </Typography>
                  <Typography className="Spartan-Regular text-[var(--white-text)] text-lg italic mb-4">
                    Maureen Simmons
                  </Typography>

                  <Typography className="Spartan-Regular text-[var(--white-text)] text-xl mb-4">
                    During my almost 20 year tenure in human resources leadership, I witnessed
                    firsthand the increasing weaponization of HR against employees often leaving me
                    helpless to provide the kind of direct support employees truly needed. This
                    realization forced me to leave the corporate world and create a company
                    dedicated to offering the direct support employees have longed for but
                    didn&apos;t think existed.
                  </Typography>

                  <Typography className="Spartan-Regular text-[var(--white-text)] text-xl mb-4">
                    I created Talente to disrupt the traditional HR department. No more pleading
                    with corporate leadership for fair and impartial treatment. Our goal is to
                    eliminate the middleman and put HR expertise directly into the hands of every
                    employee, everywhere providing them with actionable insights anytime, anywhere
                    they need them.
                  </Typography>

                  <Typography className="Spartan-Regular text-[var(--white-text)] text-xl mb-4">
                    Our platform will empower career professionals and jobseekers with the resources
                    and guidance they deserve, to transform the way they experience their careers.
                  </Typography>

                  <Typography className="Spartan-Regular text-[var(--white-text)] text-xl mb-4">
                    We&apos;re here to shake stuff up!{" "}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box className="w-full tab:w-1/2 lg:w-auto">
              <Box className="relative flex-none xl:!w-[300px] xl:!h-[300px] lg:!w-[270px] lg:!h-[270px]  lg:!mb-10 md:!w-[230px] md:!h-[230px] !mx-auto !w-[180px] !h-[180px] !mb-7">
                <Image
                  draggable="false"
                  src={FounderImg}
                  alt="Founder Image"
                  className="!bg-[var(--section-color)] !relative z-10 border-[8px] border-[--white-text] !rounded-full xl:!w-[300px] xl:!h-[300px] xl:!mb-24 xl:!border-[15px] lg:!w-[270px] lg:!h-[270px] lg:!border-[13px] lg:!mb-12 md:!w-[230px] md:!h-[230px] md:!border-[9px] md:!mb-4  !mx-auto !w-[180px] !h-[180px]"
                />
                <Box className="!absolute z-2 !bg-[--bg-gradient-color] !rounded-full xl:!w-[285px] xl:!h-[285px] xl:!left-[0px] xl:!top-[29px] lg:!w-[255px] lg:!h-[255px] lg:!left-[-16px] lg:!top-[24px] !left-[-10px] !top-[16px]  md:!left-[-12px] md:top-[25px] md:!w-[215px] md:!h-[215px] !mx-auto !w-[170px] !h-[170px]" />
              </Box>
              <Box className={"flex justify-center"}>
                <Button href="#linkedIn_URL" className="min-w-[fit-content]">
                  <LinkedIn className="text-[var(--white-text)] w-9 h-9" />
                </Button>
                <Button href="#Instagram_URL" className="min-w-[fit-content]">
                  <InstagramIcon className="text-[var(--white-text)] w-9 h-9" />
                </Button>
              </Box>
            </Box>
            {/* <Grid container>
              <Grid xs={12} md={4}>
                
              </Grid>
              <Grid xs={12} md={8}></Grid>
            </Grid> */}
          </Container>
        </Box>
        <Image
          src={BlueCircle}
          alt="BlueCircle image for Tasha page"
          className="w-[110px] absolute bottom-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>

      <Box
        className="flex justify-center relative sm:!overflow-hidden overflow-x-hidden py-10"
        sx={{
          background: "#FFF",
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
        <Container className="sm:!flex lg:!mt-0 sm:!mb-0 !mb-32">
          {/* <Box className="max-w-full relative z-30 flex">
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              className="h-full">
              <Stack direction="column">
                <Typography className="Spartan-Regular text-[var(--black-text)] text-lg mb-4">
                  With almost 20 years of HR mastery, Maureen Simmons isn&apos;t your
                  run-of-the-mill executive. She&apos;s a seasoned pro with a fierce dedication to
                  seeing people win.
                </Typography>

                <Typography className="Spartan-Regular text-[var(--black-text)] text-lg mb-4">
                  She holds a Bachelor&apos;s degree from UC Berkeley and dual MBAs from Cornell
                  University SC Johnson School of Management and Queen&apos;s University Smith
                  School of Business.
                </Typography>

                <Typography className="Spartan-Regular text-[var(--black-text)] text-lg mb-4">
                  A Chicago native now living in Oakland, CA, Maureen is a powerhouse, but it&apos;s
                  her relentless passion for leveling the playing field that truly sets her apart.
                </Typography>
              </Stack>
            </Stack>
          </Box> */}
          <Box className="w-full">
            <GradientTextReverse text="Our Core Values" className="xl:!mb-1 z-20 justify-center" />
          </Box>
        </Container>
        <Image
          src={BlueCircle}
          alt="BlueCircle image"
          className="w-[110px] absolute bottom-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>
    </>
  );
};

export default AboutUs;
