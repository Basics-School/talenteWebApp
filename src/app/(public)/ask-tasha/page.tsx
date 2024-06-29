import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import SecondaryButton from "@/common/SecondaryButton";
import BgPattern from "@/assets/images/AskTashaBgPattern.png";
import TashaImg from "@/assets/images/TashaImage.png";
import BlueCircle from "@/assets/svg/BlueCircle.svg";

const AskTashaPage = () => {
  return (
    <>
      <Box
        className="max-w-full flex justify-center"
        sx={{
          background:
            "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color)) !important",
        }}
      >
        <Box
          className="flex text-white items-center gap-7 "
          sx={{
            background: `url(${BgPattern.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={BlueCircle}
            alt="BlueCircle image for Tasha page"
            className="mt-[550px] ml-[-3rem] w-[130px]"
          />
          <Box className="left w-[42%] flex justify-end !mt-20">
            <Box className="w-[80%]">
              <Box className="flex-col">
                <Typography className="Spartan-SemiBold text-white font-normal text-[4rem] leading-none">
                  Tired of
                </Typography>
                <Typography className="Spartan-SemiBold text-white font-normal text-[4rem] leading-none">
                  company-centric
                </Typography>
                <Typography className="Spartan-SemiBold text-white font-normal text-[4rem] leading-none">
                  HR support?
                </Typography>
                <Typography className="Spartan-SemiBold text-white font-normal text-[4rem] leading-none">
                  So are we.
                </Typography>
              </Box>
              <Typography className="text-white mb-4">
                <Typography className="Montserrat-Regular">
                  AT Talente we deliver confidential,
                </Typography>
                <Typography className="Montserrat-Regular">
                  trustworthy, on-demand HR support
                </Typography>
                <Typography className="Montserrat-Regular">
                  whenever and wherever you need it.
                </Typography>
              </Typography>
              <SecondaryButton text="Chat Now" color="#FBCC3E" />
            </Box>
          </Box>

          <Box className="right w-[54%] !mt-11">
            <Image src={TashaImg} alt="Tasha image for Tasha page" className="relative z-10 mt-4" />
          </Box>
        </Box>
        <Image
          src={BlueCircle}
          alt="BlueCircle image for Tasha page"
          className="w-[130px] absolute top-[62vh] right-[-2.4rem] z-0"
        />
      </Box>
    </>
  );
};

export default AskTashaPage;
