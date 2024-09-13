import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import FounderImg from "@/assets/images/founder.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, Typography } from "@mui/material";

const AboutUs = () => {
  // const coreValues = [
  //   {
  //     icon: <EmployeeCentricity />,
  //     title: "Employee-Centricity",
  //     description:
  //       "We empower employees at every stage of their career journey, whether they are employed or looking for their next opportunity.",
  //   },
  //   {
  //     icon: <PurposeDriven />,
  //     title: "Purpose-Driven Disruptors",
  //     description:
  //       "We believe change in traditional HR tactics is necessary. We speak up for what we believe in: Diversity, Equity, and Inclusion fuels our mission.",
  //   },
  //   {
  //     icon: <DoMoreLessTime />,
  //     title: "Do More With Less",
  //     description:
  //       "We built a smart platform so we could do more with less. We use innovation thoughtfully to navigate productivity.",
  //   },
  //   {
  //     icon: <RelationShip />,
  //     title: "Build Meaningful Relationships",
  //     description:
  //       "We are intentional about building lasting connections. We’re redefining the art of professional networking.",
  //   },
  //   {
  //     icon: <Empower />,
  //     title: "Empower Others",
  //     description:
  //       "We set the stage for others to be the best version of themselves: career professionals, job seekers, and everyone in between.",
  //   },
  // ];
  return (
    <>
      <Box
        className="flex justify-center relative overflow-hidden"
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box
          className="flex text-[var(--white-text)] items-center gap-7 relative w-full pt-[150px] pb-[70px] xl:py-[200px] xl:pb-[100px] px-2 sm:px-0"
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
          <Container>
            <div className="mb-10">
              <h2 className="Spartan-SemiBold uppercase text-[var(--white-text)] text-center md:text-left">
                FOUNDER&apos;S STORY
              </h2>
              <h3 className="Spartan-SemiBold text-[var(--white-text)] text-center md:text-left">
                May 2024
              </h3>
              <p className="text-center md:text-left italic">Founder and CEO, Maureen Simmons</p>
            </div>
            <div className="justify-between flex flex-col md:flex-row items-start gap-10">
              <Box className="order-2 md:order-1 max-w-full relative z-30 flex justify-center w-full xl:w-auto">
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  className="h-full"
                >
                  <Stack direction="column">
                    <p className="Montserrat-Regular text-[var(--white-text)] mb-7">
                      During my almost 20-year tenure in human resources leadership, I witnessed
                      firsthand the increasing weaponization of HR against employees often leaving
                      me helpless to provide the kind of direct support employees truly needed. This
                      realization forced me to leave the corporate world and create a company
                      dedicated to offering the direct support employees have longed for but
                      didn&apos;t think existed.
                    </p>

                    <p className="Montserrat-Regular text-[var(--white-text)] mb-7">
                      I founded Talente with a bold mission: to democratize human resources and
                      career management, transforming the future of work. No more missed
                      opportunities to improve employee-employer relationships—Talente is designed
                      to amplify best practices and inform new, transformative approaches that
                      empower individuals and teams alike.
                    </p>

                    <p className="Montserrat-Regular text-[var(--white-text)] mb-7">
                      Talente is the only platform that addresses the full lifecycle of career
                      management, providing individuals and teams with the comprehensive support and
                      insights needed to thrive at every stage of their professional journey.
                    </p>
                  </Stack>
                </Stack>
              </Box>
              <Box className="order-1 md:order-2 xl:w-auto mx-auto">
                <Box className="relative flex-none xl:!w-[300px] xl:!h-[300px] lg:!w-[270px] lg:!h-[270px]  lg:!mb-10 md:!w-[230px] md:!h-[230px] !mx-auto !w-[180px] !h-[180px] !mb-7">
                  <Image
                    draggable="false"
                    src={FounderImg}
                    alt="Founder Image"
                    className="!bg-[var(--section-color)] !relative z-10 md:border-[2rem] sm:border-[1.2rem] border-8 border-amber-400 !rounded-full xl:!w-[300px] xl:!h-[300px] xl:!mb-24 xl:!border-[15px] lg:!w-[270px] lg:!h-[270px] lg:!border-[13px] lg:!mb-12 md:!w-[230px] md:!h-[230px] md:!mb-4  !mx-auto !w-[180px] !h-[180px]"
                  />
                </Box>
                <Box className={"flex justify-center"}>
                  <Button
                    target="_blank"
                    href="https://www.linkedin.com/in/simmonsmaureen"
                    className="min-w-[fit-content]"
                  >
                    <LinkedIn className="text-amber-400 w-9 h-9" />
                  </Button>
                  <Button
                    target="_blank"
                    href="https://www.instagram.com/maureensimmons_"
                    className="min-w-[fit-content]"
                  >
                    <InstagramIcon className="text-amber-400 w-9 h-9" />
                  </Button>
                </Box>
              </Box>
            </div>
          </Container>
        </Box>
        <Image
          src={BlueCircle}
          alt="BlueCircle image for Tasha page"
          className="w-[110px] absolute bottom-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>

      <Box
        className="flex justify-center relative sm:!overflow-hidden overflow-x-hidden tab:py-10 bg-[--section-color]"
        sx={{
          background:
            "linear-gradient(to right, var( --black-color), var(--bg-gradient-color)) !important",
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
        <Container className="sm:!flex flex-wrap lg:!mt-0 max-w-[1150px] mx-auto py-10">
          <Box className="w-full">
            <h2 className="Spartan-Bold tracking-wide !normal-case flex text-gradient xl:!mb-1 z-20 justify-center">
              Our Core Values
            </h2>
            <Typography className="text-white Montserrat-Regular !mx-auto mb-2 mt-6 text-center xl:text-[26px] max-w-auto md:max-w-[1000px] ">
              People first.
            </Typography>
            <Typography className="text-white Montserrat-Regular !mx-auto mb-0 text-center xl:text-[18px] max-w-auto md:max-w-[1000px] ">
              We envision a future in which leaders can use technology to solve uniquely human
              problems.
            </Typography>
            <Typography className="text-white Montserrat-Regular !mx-auto mb-0 text-center xl:text-[18px] max-w-auto md:max-w-[1000px] ">
              We help build software that changes lives. Our shared values inform every step we take
              on that journey.
            </Typography>
          </Box>
          <Box className="flex flex-wrap mt-10 text-black">
            <Box className="sm:w-1/2 sm:px-4 sm:space-y-9 space-y-5 sm:mb-0 mb-5">
              <Box className="flex flex-col justify-center rounded-3xl bg-amber-500 sm:px-6 px-4 sm:min-h-96 py-6">
                <h3 className="Spartan-SemiBold sm:text-3xl text-2xl">Employee-Centricity</h3>
                <p className="text-base">
                  We empower employees at every stage of their career journey, whether they are
                  employed or looking for their next opportunity.
                </p>
              </Box>
              <Box className="flex flex-col justify-center rounded-3xl bg-white sm:px-6 px-4 sm:min-h-60 py-6">
                <h3 className="Spartan-SemiBold sm:text-3xl text-2xl">Do More With Less</h3>
                <p className="text-base">
                  We built a smart platform so we could do more with less. We use innovation
                  thoughtfully to navigate productivity.
                </p>
              </Box>
            </Box>
            <Box className="sm:w-1/2 sm:px-4 sm:space-y-9 space-y-5 sm:mb-9 mb-5">
              <Box className="flex flex-col justify-center rounded-3xl bg-white sm:px-6 px-4 sm:min-h-60 py-6">
                <h3 className="Spartan-SemiBold sm:text-3xl text-2xl">Purpose-Driven Disruptors</h3>
                <p className="text-base">
                  We believe change in traditional HR tactics is necessary. We speak up for what we
                  believe in: Diversity, Equity, and Inclusion fuels our mission.
                </p>
              </Box>
              <Box className="flex flex-col justify-center rounded-3xl bg-amber-500 sm:px-6 px-4 sm:min-h-96 py-6">
                <h3 className="Spartan-SemiBold sm:text-3xl text-2xl">
                  Build Meaningful Relationships
                </h3>
                <p className="text-base">
                  We are intentional about building lasting connections. We’re redefining the art of
                  professional networking.
                </p>
              </Box>
            </Box>
            <Box className="flex flex-col justify-center items-center w-full rounded-3xl bg-white sm:px-6 px-4 sm:min-h-60 py-6">
              <div className="w-1/2">
                <h3 className="Spartan-SemiBold sm:text-3xl text-2xl">Empower Others</h3>
                <p className="text-base">
                  We set the stage for others to be the best version of themselves: career
                  professionals, jobseekers, and everyone in between.
                </p>
              </div>
            </Box>
          </Box>
        </Container>
        <Image
          src={BlueCircle}
          alt="BlueCircle image"
          className="w-[110px] absolute top-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>
    </>
  );
};

export default AboutUs;
