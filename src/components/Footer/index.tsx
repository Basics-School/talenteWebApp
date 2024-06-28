import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";

import CircularShape from "@/assets/svg/CircularShape.svg";
import Globe from "@/assets/svg/Globe.svg";
import TalenteLogo from "@/assets/svg/TalenteLogo.svg";
import FacebookCircularIcon from "@/assets/svg/FacebookCircularLogo.svg?svgr";
import InstagramCircularIcon from "@/assets/svg/InstagramCircularLogo.svg?svgr";
import TwitterCircularIcon from "@/assets/svg/TwitterCircularLogo.svg?svgr";
import LinkedInCircularIcon from "@/assets/svg/LinkedInCircularLogo.svg?svgr";
import EmailIcon from "@/assets/svg/Email.svg?svgr";
import LocationIcon from "@/assets/svg/Location.svg?svgr";
import GradientTextCommon from "@/common/GradientTextCommon";
import { appConfig } from "@/appConfig";
import { usefulLinks } from "@/data/navbar";

const Footer = () => {
  return (
    <Box
      className="overflow-clip py-8 sm:py-10 md:py-16"
      sx={{
        background: "var(--black-color)",
        color: "var(--white-text)",
        position: "relative",
      }}
    >
      <Box className="absolute sm:left-[-40px] md:left-[-120px] bottom-[-10px] rotate-[0deg]">
        <Image
          draggable="false"
          src={CircularShape}
          alt="CircularShape"
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[450px] md:h-[300px]"
        />
      </Box>
      <Container>
        <Grid container className="space-y-10 md:space-y-0">
          <Grid xs={12} md={3}>
            <Stack direction="column" alignItems="flex-start" spacing={2}>
              <Image draggable="false" alt="Logo" src={TalenteLogo} className="w-[125px]" />
              <Box className="w-[150px]">
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <FacebookCircularIcon className="h-5 w-5" />
                  <InstagramCircularIcon className="h-5 w-5" />
                  <TwitterCircularIcon className="h-5 w-5" />
                  <LinkedInCircularIcon className="h-5 w-5" />
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <GradientTextCommon
                text="Useful Links"
                className="!text-2xl Spartan-Bold"
                startColor="#CB6CE6"
                endColor="#FFFFFF"
              />
              <Stack direction="row" spacing={2}>
                {usefulLinks.map((link) => (
                  <Link key={link.path} className="Spartan-Medium" href={link.path}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={3}>
            <Stack direction="column" spacing={2}>
              <GradientTextCommon
                text="Contact Talente"
                className="!text-2xl Spartan-Bold"
                startColor="#CB6CE6"
                endColor="#FFFFFF"
              />

              <Stack direction="row" alignItems="center" spacing={1.5}>
                <EmailIcon className="h-5 w-5" />
                <a href="mailto:hello@mytalente.com" className="text-lg Spartan-Medium">
                  {appConfig.company.email}
                </a>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                <LocationIcon className="h-7 w-7" />
                <Typography className="text-lg Spartan-Medium">
                  {appConfig.company.location}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography className="mt-16 md:mt-28 text-base Spartan-Regular text-center">
          {appConfig.company.footerText}
        </Typography>
      </Container>
      <Box className="absolute right-[-150px] top-0">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="w-[300px] h-[200px] sm:h-[300px]"
        />
      </Box>
    </Box>
  );
};

export default Footer;
