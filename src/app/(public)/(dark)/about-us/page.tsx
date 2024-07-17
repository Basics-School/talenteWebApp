import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import FounderImg from "@/assets/images/founder.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";
import LinkedIn from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import GradientTextReverse from "@/common/GradientTextReverse";
import CoreValueCard from "@/common/CoreValueCard";
import EmployeeCentricity from "@/assets/svg/company-employee.svg?svgr";
import DoMoreLessTime from "@/assets/svg/do-more-less-time.svg?svgr";
import PurposeDriven from "@/assets/svg/purpose-driven-disruptors.svg?svgr";
import RelationShip from "@/assets/svg/relationship.svg?svgr";
import Empower from "@/assets/svg/empower.svg?svgr";
import AnimatedGradientText from "@/common/AnimatedGradientText";
import CareerSingle from "@/assets/images/career-single-left.png";
import CareerDoubleTop from "@/assets/images/career-right-top.png";
import CareerDoubleBottom from "@/assets/images/career-right-bottom.png";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <EmployeeCentricity />,
      title: "Employee-Centricity",
      description:
        "We empower employees at every stage of their career journey, whether they are employed or looking for their next opportunity",
    },
    {
      icon: <PurposeDriven />,
      title: "Purpose-Driven Disruptors",
      description:
        "We believe change in traditional HR tactics is necessary. We speak up for what we believe in: Diversity, Equity, and Inclusion fuels our mission.",
    },
    {
      icon: <DoMoreLessTime />,
      title: "Do More With Less",
      description:
        "We built a smart platform so we could do more with less. We use innovation thoughtfully to navigate productivity.",
    },
    {
      icon: <RelationShip />,
      title: "Build Meaningful Relationships",
      description:
        "We are intentional about building lasting connections. We’re redefining the art of professional networking.",
    },
    {
      icon: <Empower />,
      title: "Empower Others",
      description:
        "We set the stage for others to be the best version of themselves: career professionals, jobseekers, and everyone in between.",
    },
  ];
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
          <Container className="sm:!justify-between sm:!flex flex-col lg:flex-row items-center">
            <Box className="max-w-full relative z-30 flex justify-center w-full lg:w-1/2 xl:w-auto">
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
            <Box className="w-full lg:w-1/2 xl:w-auto">
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
        className="flex justify-center relative sm:!overflow-hidden overflow-x-hidden tab:py-10 bg-[--section-color]"
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
        <Container className="sm:!flex flex-wrap lg:!mt-0 max-w-[1150px] mx-auto py-10">
          <Box className="w-full">
            <GradientTextReverse text="Our Core Values" className="xl:!mb-1 z-20 justify-center" />
          </Box>
          <Box className="grid tab:grid-cols-2 mt-10">
            {coreValues.map((item, index) => (
              <Box key={index} className="w-full p-2 hover:-translate-y-1 transition-transform">
                <CoreValueCard key={index} card={item} />
              </Box>
            ))}
          </Box>
        </Container>
        <Image
          src={BlueCircle}
          alt="BlueCircle image"
          className="w-[110px] absolute top-36 right-[-2.4rem] z-0 spinGlobe"
        />
      </Box>

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
          <Container>
            <Box className="!text-center flex flex-wrap">
              <Box className="w-full mb-10">
                <AnimatedGradientText
                  text="Gain a competitive advantage by making data-driven career decisions."
                  className="md:!pt-12 !pt-6 lg:!mb-0 md:!pb-6 !pb-6 !mt-0 lg:text-[3rem]"
                />
              </Box>
              <Box className="w-full tab:w-[40%]">
                <Typography
                  variant="h3"
                  className="Spartan-SemiBold text-[28px] leading-[1.3] text-left text-white mb-3"
                >
                  Realtime Insights and Predictions To Optimize Your Career.
                </Typography>
                <Typography
                  variant="body1"
                  className="Spartan-Light text-white text-[18px] text-left"
                >
                  Talente is your one-stop shop for career data management, with instant, automated
                  feedback and insights, and in-depth analytics to inform your career decisions and
                  keep you competitive
                </Typography>

                <Box className="mt-6">
                  <List
                    sx={{
                      listStyleType: "disc",
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                        color: "#fff",
                        padding: "1px 0px !important",
                        marginLeft: "1.5rem",
                      }}
                      disablePadding
                    >
                      <ListItemText className="Spartan-Light text-white mb-2">
                        Employment Records
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        color: "#fff",
                        padding: "1px 0px !important",
                        marginLeft: "1.5rem",
                      }}
                      disablePadding
                    >
                      <ListItemText className="Spartan-Light text-white mb-2">
                        Automated Reporting
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        color: "#fff",
                        padding: "1px 0px !important",
                        marginLeft: "1.5rem",
                      }}
                      disablePadding
                    >
                      <ListItemText className="Spartan-Light text-white mb-2">
                        Industry Insights and Trends
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        color: "#fff",
                        padding: "1px 0px !important",
                        marginLeft: "1.5rem",
                      }}
                      disablePadding
                    >
                      <ListItemText className="Spartan-Light text-white mb-2">
                        Mobile App - iOS and Android
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="w-full tab:w-[60%]">
                <Box className="flex">
                  <Box className="w-[40%] p-2 tab:p-4">
                    <Image
                      src={CareerSingle}
                      alt="Left Single Image"
                      className="w-full xl:h-[490px]"
                    />
                  </Box>
                  <Box className="w-[60%] p-2 tab:p-4 flex flex-col gap-4 tab:gap-6">
                    <Box className="">
                      <Image src={CareerDoubleTop} alt="Right Double Image" className="w-full" />
                    </Box>
                    <Box className="pb-0">
                      <Image src={CareerDoubleBottom} alt="Right Double Image" className="w-full" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
