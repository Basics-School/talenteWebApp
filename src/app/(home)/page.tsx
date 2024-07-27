import InfoSection from "@/components/InfoSection";
import Image from "next/image";
// import Globe from "@/assets/svg/Globe.svg";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Box from "@mui/material/Box";
import CareerSupportSection from "@/components/CareerSupportSection";
import CareerGuideSection from "@/components/CareerGuideSection";
import Decoration from "@/assets/svg/Decoration.svg";
import ExperienceSection from "@/components/ExperienceSection";
import CareerAutomate from "@/components/CareerAutomate";
// import CoreValuesSection from "@/components/CoreValuesSection";
import Container from "@/components/Container";
import AnimatedGradientText from "@/common/AnimatedGradientText";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import CareerSingle from "@/assets/images/career-single-left.png";
import CareerDoubleTop from "@/assets/images/career-right-top.png";
import CareerDoubleBottom from "@/assets/images/career-right-bottom.png";
import DottedCircle from "@/assets/svg/DottedCircle.svg";

export default function Home() {
  return (
    <Box className="w-full flex flex-col">
      <Box
        className="relative flex flex-col w-full overflow-clip py-[60px] md:py-20 lg:py-[120px] xl:py-[140px]"
        sx={{
          background:
            "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box className="xl:!mt-0 !mt-0 flex-1 mb-[0px] flex items-center">
          <InfoSection />
        </Box>
        <Box className="absolute bottom-6 -left-8 md:!-left-7 lg-left-16 spinCircle z-10">
          <Image
            draggable="false"
            src={BlueCircle}
            alt="Blue Circle"
            className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[80px] !h-[80px] spinGlobe"
          />
        </Box>
        {/* <Box className="absolute lg:-bottom-16 md:-bottom-10 -bottom-5 xl:!-right-[8.5rem] lg:-right-20 md:-right-20 -right-20 z-10">
          <Image
            draggable="false"
            src={Globe}
            alt="Globe"
            className="tab:!w-[310px] !w-[40vw] spinGlobe"
          />
        </Box> */}
      </Box>

      <Box style={{ background: "var(--section-color)" }}>
        <CareerSupportSection />
      </Box>
      <Box style={{ background: "var(--section-color)" }}>
        <Image
          src={Decoration}
          alt="Decoration Image"
          className="!mx-auto sm:-mt-[0rem] xl:!w-[160px] xl:!h-[55px] lg:!w-[120px] !w-[90px]"
        />
      </Box>
      <Box style={{ minHeight: "480px", background: "var(--section-color)" }}>
        <CareerGuideSection />
      </Box>
      <Box className="pb-20" style={{ background: "var(--section-color)" }}>
        <CareerAutomate />
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
        <Box className="relative py-[60] md:py-20 lg:pt-[100px]">
          <Image
            draggable="false"
            src={DottedCircle}
            alt="Dotted Circle"
            className="absolute left-0 -top-8 lg:!w-[250px] lg:!h-[250px] sm:!w-[200px] sm:!h-[200px] !w-[150px] !h-[150px] animates"
          />
          <Container>
            <Box className="!text-center flex flex-wrap">
              <Box className="w-full mb-14">
                <AnimatedGradientText
                  text="Gain a competitive advantage by making data-driven career decisions."
                  as="h2"
                  className="lg:text-[3rem]"
                />
              </Box>
              <Box className="w-full tab:w-[40%]">
                <Typography
                  variant="h3"
                  className="Spartan-SemiBold text-[28px] leading-[1.3] text-left text-white mb-6"
                >
                  Realtime Insights and Predictions To Optimize Your Career.
                </Typography>
                <p className="Spartan-Light text-white text-left">
                  Talente is your one-stop shop for career data management, with instant, automated
                  feedback and insights, and in-depth analytics to inform your career decisions and
                  keep you competitive
                </p>

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
                      className="mt-2"
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
                      className="mt-2"
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
                      className="mt-2"
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
                  <Box className="w-[40%] px-2 tab:px-4">
                    <Image
                      src={CareerSingle}
                      alt="Left Single Image"
                      className="w-full xl:h-[490px]"
                    />
                  </Box>
                  <Box className="w-[60%] px-2 tab:px-4 flex flex-col gap-4 tab:gap-6">
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
        <ExperienceSection />
      </Box>
      {/* <Box className="gradient-blue-black">
        <CoreValuesSection />
      </Box> */}
    </Box>
  );
}
