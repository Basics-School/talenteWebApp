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
        className="h-[100vh] flex justify-center relative overflow-hidden"
        sx={{
          background:
            "linear-gradient(to bottom, var( --black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box
          className="flex text-[var(--white-text)] items-center gap-7 relative w-full"
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

          <Container className="flex justify-center md:block">
            <Box className="max-w-full sm:max-w-lg relative z-10">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                className="h-full"
              >
                <Stack direction="column">
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    Tired of
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    company-centric
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    HR support?
                  </Typography>
                  <Typography className="Spartan-SemiBold text-[var(--white-text)] md:!text-5xl lg:!text-6xl !mb-1 !text-4xl">
                    So are we.
                  </Typography>
                  <Typography className="text-[var(--white-text)] !mb-6">
                    <Typography className="Montserrat-Regular md:!text-xl !text-lg">
                      AT Talente we deliver confidential,
                    </Typography>
                    <Typography className="Montserrat-Regular md:!text-xl !text-lg">
                      trustworthy, on-demand HR support
                    </Typography>
                    <Typography className="Montserrat-Regular md:!text-xl !text-lg">
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
            <Image
              src={TashaImg}
              alt="Tasha image for Tasha page"
              className="mt-4 absolute z-20 bottom-0 right-0 xs:hidden md:block lg:w-[800px] md:w-[600px] sm:w-[500px]"
            />
          </Container>
        </Box>
        <Image
          src={BlueCircle}
          alt="BlueCircle image for Tasha page"
          className="w-[110px] absolute bottom-36 right-[-2.4rem] z-10"
        />
      </Box>
    </>
  );
};

export default AskTashaPage;
