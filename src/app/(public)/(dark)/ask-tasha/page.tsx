import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import TashaChat from "@/assets/images/tasha-chat.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";

const AskTashaPage = () => {
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
          <Container className=" sm:!justify-between sm:!flex lg:!mt-0 sm:!mb-0 !mb-32">
            <Box className="max-w-full sm:max-w-lg relative z-30 flex justify-center">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                className="h-full"
              >
                <Stack direction="column">
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !text-4xl">
                    Tired of
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    company-centric
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    HR Support?
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    So are we.
                  </Typography>
                  <Typography className="text-[var(--white-text)] !mb-6">
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      With Talente you control your career. Get as
                    </Typography>
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      little or as much HR and Career support as
                    </Typography>
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      you want. You decide.
                    </Typography>
                  </Typography>
                  <SecondaryButton text="Chat Now" color="#FBCC3E" />
                </Stack>
              </Stack>
            </Box>
            {/* <Grid container>
              <Grid xs={12} md={4}>
                
              </Grid>
              <Grid xs={12} md={8}></Grid>
            </Grid> */}
            <Box className="flex justify-center w-auto">
              <Image
                src={TashaChat}
                alt="Tasha image for Tasha page"
                className="!mt-4 z-20 lg:!w-[750px] h-[400px] object-contain md:!w-[600px] sm:!w-[500px] !w-[400px] lg:!mb-[-110px] tab:!relative !absolute"
              />
            </Box>
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
