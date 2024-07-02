import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import TashaImg from "@/assets/images/TashaImage.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";
import Stack from "@mui/material/Stack";
import Container from "@/components/Container";

const AskTashaPage = () => {
  return (
    <>
      <Box
        className="!h-[100vh] flex justify-center relative  overflow-hidden"
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
          <Box className="absolute bottom-6 -left-8 md:!-left-7 lg-left-16 spinCircle z-10">
            <Image
              draggable="false"
              src={BlueCircle}
              alt="Blue Circle"
              className="xl:!w-[80px] xl:!h-[80px] lg:!w-[67px] lg:!h-[61px] !w-[80px] !h-[80px] spinGlobe"
            />
          </Box>
          <Container className="!flex-col sm:!justify-center sm:!flex sm:!mt-[-8rem] md:!mt-[-4rem] lg:!mt-0  mt-36">
            <Box className="max-w-full sm:max-w-lg relative z-30 flex justify-center">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                className="h-full"
              >
                <Stack direction="column">
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !text-3xl">
                    Tired of
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-3xl">
                    company-centric
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-3xl">
                    HR Support?
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] sm:!text-4xl md:!text-5xl lg:!text-6xl !mb-1 !text-3xl">
                    So are we.
                  </Typography>
                  <Typography className="text-[var(--white-text)] !mb-6">
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      AT Talente we deliver confidential,
                    </Typography>
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      trustworthy, on-demand HR support
                    </Typography>
                    <Typography className="Montserrat-Regular sm:!text-lg !text-md">
                      whenever and wherever you need it.
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
            <Box className=" flex justify-center">
              <Image
                src={TashaImg}
                alt="Tasha image for Tasha page"
                className="!mt-4 sm:!absolute z-20 xs:!bottom-0 sm:!right-0 lg:!w-[800px] md:!w-[600px] sm:!w-[500px] !w-[300px]"
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
