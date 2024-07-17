import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import space from "@/assets/svg/Space.svg";
import Globe from "@/assets/svg/Globe.svg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const LegalNotice = () => {
  return (
    <Box
      className="max-w-full flex flex-col justify-center items-center relative overflow-clip"
      sx={{
        background: "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color))",
      }}
    >
      {/* Background Space Image */}
      <Box className=" absolute z-10 xl:!mt-36 lg:!mt-32 md:!mt-[10rem]">
        <Image
          draggable="false"
          src={space}
          alt="space"
          className="xl:w-[600px] xl:h-[550px] lg:w-[600px] lg:h-[550px] md:w-[600px] md:h-[550px] sm:w-[300px] sm:h-[240px] w-[200px] h-[140px] "
        />
      </Box>

      {/* Main Content */}
      <Container className="max-w-[1366px] px-6 !my-[10rem] flex-1">
        <Typography
          variant="h1"
          className="Spartan-SemiBold text-white xl:text-[50px] xl:leading-[71px] lg:text-[40px]  lg:leading-[3rem] md:text-[40px] md:leading-[3.5rem] sm:text-[40px] sm:leading-[3.5rem] text-[27px] overflow-wrap break-words"
        >
          Legal Notice
        </Typography>
        <Typography
          variant="h4"
          className="Spartan-Medium text-white xl:text-[28px] xl:leading-[45px] xl:mb-6 lg:text-[28px]  lg:leading-[3rem] lg:mb-6 md:text-[26px] md:leading-[3.2rem]  sm:text-[26px] sm:leading-[3rem]   text-[20px] leading-[3rem] mb-7 overflow-wrap break-words"
        >
          Patent Pending
        </Typography>
        <Stack direction="column" spacing={2}>
          <Typography
            variant="body1"
            className="Spartan-SemiBold text-white xl:text-[21px] xl:leading-[30px] lg:text-[21px] lg:leading-[1.5rem] md:text-[21px] md:leading-[1.5rem] sm:text-[21px] sm:leading-[1.5rem] text-[15px] leading-[1rem]   overflow-wrap break-words"
          >
            The technology underlying &quot;Tasha,&quot; an AI-powered HR assistant developed by
            Talente, is currently under patent review. Tasha&apos;s innovative features, including
            its natural language processing engine, machine learning algorithms, integration
            capabilities, and user assistance modules, are protected by a provisional patent
            application filed with the United States Patent and Trademark Office (USPTO).
          </Typography>
          <Typography
            variant="body1"
            className="Spartan-SemiBold text-white xl:text-[21px] xl:leading-[30px] lg:text-[21px] lg:leading-[1.5rem]  md:text-[21px] md:leading-[1.5rem] text-[15px] leading-[1rem] sm:text-[21px] sm:leading-[1.5rem]  overflow-wrap break-words"
          >
            Unauthorized use, reproduction, or distribution of Tasha&apos;s technology or any of its
            components is strictly prohibited and may result in legal action. For more information
            about our patent-pending technology, please contact Talente&apos;s legal department.
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              variant="h1"
              className="Spartan-SemiBold text-white xl:text-[50px] xl:leading-[71px] lg:text-[40px] lg:leading-[4rem]  md:text-[40px] md:leading-[4rem] sm:text-[40px] sm:leading-[3.5rem]  text-[27px]  overflow-wrap break-words"
            >
              Talente, Inc.
            </Typography>
            <Box>
              <Typography
                variant="h2"
                className="Spartan-SemiBold text-white xl:text-[30px] xl:leading-[40px] lg:text-[30px] lg:leading-[2rem] md:text-[28px] md:leading-[2rem] sm:text-[28px] sm:leading-[2rem] text-[22px]  overflow-wrap break-words"
                sx={{
                  fontSize: "30px",
                  color: "white",
                }}
              >
                For inquiries, please contact:
              </Typography>
              <Typography
                variant="h2"
                className="Spartan-SemiBold text-white xl:text-[30px] xl:leading-[40px] lg:text-[30px] lg:leading-[2rem] md:text-[28px] md:leading-[2rem] sm:text-[28px] sm:leading-[2rem] text-[22px]  overflow-wrap break-words"
                sx={{
                  fontSize: "30px",
                  color: "white",
                }}
              >
                Email: hello@talente.com
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>

      {/* Globe */}
      <Box className="absolute z-10 lg:-bottom-16 md:-bottom-10 -bottom-5 xl:-right-[8.5rem] lg:-right-20 md:-right-20 -right-20">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="xl:w-[450px] xl:h-[250px] lg:w-[300px] lg:h-[250px] md:w-[250px] md:h-[200px] sm:w-[200px] sm:h-[200px] w-[200px] h-[140px] overflow-hidden"
        />
      </Box>
    </Box>
  );
};

export default LegalNotice;
