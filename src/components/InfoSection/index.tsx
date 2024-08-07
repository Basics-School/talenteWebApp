"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { default as MuiButton } from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
// import ActionButton from "@/common/ActionButton";
import BannerImg from "@/assets/images/HomeHero.png";
import { Grid } from "@mui/material";
import Container from "@/components/Container";
// import WaitlistModal from "../WaitlistModal";
import Button from "../Button";

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, var(--button-shadow), var(--white-text))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  maxWidth: "1200px",
  paddingLeft: "20px",
  paddingRight: "20px",
});

const GradientTextButton = styled(MuiButton)(({}) => ({
  textTransform: "none",
  margin: "0 auto",
  display: "flex",
  borderRadius: "9999px",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "2px solid linear-gradient(45deg, #004AAD, #CB6CE6)",
  padding: "0.75rem 2rem",
  "&::before": {
    content: "' '",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "9999px",
    padding: "2px",
    background: "linear-gradient(45deg, #004AAD, #CB6CE6)",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
  },
}));

const InfoSection = () => {
  return (
    <Box className="flex flex-col lg:!gap-10 mt-28 md:mt-20 !gap-8 !mx-auto mb-[-10px] w-full max-w-[1366px]">
      <Box>
        <Container>
          <Grid container className="space-y-10 md:space-y-0 items-center justify-between">
            <Grid xs={12} md={7} className="md:mb-20">
              <GradientTextButton className="Montserrat-Medium tracking-wide mb-8 ml-0 !normal-case flex justify-start text-gradient xl:text-[20px] lg:text-[20px] text-sm bg-[linear-gradient(to_right,theme(colors.pink.400),theme(colors.pink.100),theme(colors.white),theme(colors.pink.400),theme(colors.white),theme(colors.pink.100),theme(colors.pink.400))] bg-[length:200%_auto] animate-gradient bg-clip-text">
                AI-Powered Career Support
              </GradientTextButton>
              <GradientText
                as={"h1"}
                className="Spartan-SemiBold p-0 mb-6 overflow-wrap break-words"
              >
                <span className="text-gradient1">Take control of your</span>
                <span className="text-gradient2"> career with smart </span>
                <span className="text-gradient3">automation.</span>
              </GradientText>
              <p className="Montserrat-Regular !mx-auto mb-6 !text-[--white-text] text-base lg:text-[20px] leading-8">
                On-demand HR and Career Services support. Through Talente. Right into an Applicant
                Tracking System (ATS) or Human Resources Information System (HRIS).
                {/* <span className="!text-[--button-border]">so you can focus on what really matters.</span> */}
              </p>
              {/* <ActionButton
                text="Join Our Waitlist"
                className="Montserrat-Medium !mb-1 xl:!text-[14px] !text-sm xl:!py-3 xl:!px-6 lg:!py-2 !px-8 border--fix2"
                openDialog
              /> */}
              {/* <GradientTextButton className="Montserrat-Medium tracking-wide mb-8 ml-0 !normal-case flex justify-start text-gradient xl:text-[20px] lg:text-[20px] text-sm bg-[linear-gradient(to_right,theme(colors.pink.400),theme(colors.pink.100),theme(colors.white),theme(colors.pink.400),theme(colors.white),theme(colors.pink.100),theme(colors.pink.400))] bg-[length:200%_auto] animate-gradient bg-clip-text" onClick={handleClick}>
                Join Our Waitlist
              </GradientTextButton> */}
              <Button
                className="lg:text-xl bg-white text-purple-800 font-extrabold px-5 py-1 relative z-20"
                openDialog
              >
                Join Our Waitlist
              </Button>

              <Typography className="Montserrat-Regular mt-6 !text-[--white-text] text-[14px] lg:text-[16px]">
                We will only use this to keep you in the loop. We hate spam too!
              </Typography>
            </Grid>

            <Grid xs={12} md={5} className="z-20">
              <Image
                src={BannerImg}
                alt="Banner Image"
                height={650}
                className="mx-auto h-[400px] tab:!h-[460px] lg:!h-[650px] object-contain object-bottom"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default InfoSection;
