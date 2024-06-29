import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import space from "@/assets/svg/Space.svg";
import Globe from "@/assets/svg/Globe.svg";
import Image from "next/image";

const LegalNotice = () => {
  return (
    <Box
      className="max-w-full flex flex-col min-h-screen justify-center items-center"
      sx={{
        background: "linear-gradient(to bottom, var(--black-color), var(--bg-gradient-color))",
      }}
    >
      {/* Background Space Image */}
      <Box className="absolute z-10 xl:!mt-36">
        <Image
          draggable="false"
          src={space}
          alt="space"
          className="xl:w-[600px] xl:h-[550px] lg:w-[437px] lg:h-[431px] md:w-[390px] md:h-[390px] sm:w-[300px] sm:h-[240px] w-[200px] h-[140px] "
        />
      </Box>

      {/* Main Content */}
      <Box className="border-2 border-red-500 max-w-[1637px] w-[90%] xl:!mt-[10rem] lg:!mt-32 !mt-24 flex-1 px-2 sm:px-0">
        <Typography
          variant="h1"
          className="Spartan-SemiBold text-white xl:text-[50px] xl:leading-[71px] lg:text-4xl lg:leading-[3rem] md:text-4xl md:leading-[3.2rem] text-[27px]  overflow-wrap break-words"
        >
          Legal Notice
        </Typography>
        <Typography
          variant="h4"
          className="Spartan-Medium text-white xl:text-[30px] xl:leading-[45px] lg:text-3xl lg:leading-[3rem] lg:mb-3 md:text-4xl md:leading-[3.2rem] text-[20px] leading-[3rem] mb-7 overflow-wrap break-words"
        >
          Patent Pending
        </Typography>
        <Typography
          variant="body1"
          className="Spartan-SemiBold text-white xl:text-[20px] xl:leading-[30px] lg:text-2xl lg:leading-[1.5rem] md:text-4xl md:leading-[3.2rem] text-[15px] leading-[1rem] my-3  overflow-wrap break-words"
        >
          The technology underlying &quot;Tasha,&quot; an AI-powered HR assistant developed by
          Talente, is currently under patent review. Tasha&apos;s innovative features, including its
          natural language processing engine, machine learning algorithms, integration capabilities,
          and user assistance modules, are protected by a provisional patent application filed with
          the United States Patent and Trademark Office (USPTO).
        </Typography>
        <Typography
          variant="body1"
          className="Spartan-SemiBold text-white xl:text-[20px] xl:leading-[30px] lg:text-2xl lg:leading-[1.5rem] lg:my-4 md:text-4xl md:leading-[3.2rem] text-[15px] leading-[1rem] my-3 overflow-wrap break-words"
        >
          Unauthorized use, reproduction, or distribution of Tasha&apos;s technology or any of its
          components is strictly prohibited and may result in legal action. For more information
          about our patent-pending technology, please contact Talente&apos;s legal department.
        </Typography>
        <Box className="w-full sm:w-[400px] mt-8 sm:mt-0">
          <Typography
            variant="h1"
            className="Spartan-SemiBold text-white xl:text-[50px] xl:leading-[71px] lg:text-4xl lg:leading-[3rem] md:text-4xl md:leading-[3.2rem] text-[27px]  overflow-wrap break-words"
          >
            Talente, Inc.
          </Typography>
          <Typography
            variant="h2"
            className="Spartan-SemiBold text-white xl:text-[32px] xl:leading-[40px] lg:text-3xl lg:leading-[2rem] md:text-4xl md:leading-[3.2rem] text-[22px]  overflow-wrap break-words"
            sx={{
              fontSize: "30px",
              color: "white",
            }}
          >
            For inquiries, please contact:
          </Typography>
          <Typography
            variant="h2"
            className="Spartan-SemiBold text-white xl:text-[32px] xl:leading-[40px] lg:text-3xl lg:leading-[2rem] md:text-4xl md:leading-[3.2rem] text-[22px]  overflow-wrap break-words"
            sx={{
              fontSize: "30px",
              color: "white",
            }}
          >
            Email: hello@talente.com
          </Typography>
        </Box>
      </Box>

      {/* Globe */}
      <Box className="border-2 border-red-500 absolute z-10 lg:-bottom-16 md:-bottom-10 -bottom-5 xl:-right-[8.5rem] lg:-right-20 md:-right-20 -right-20">
        <Image
          draggable="false"
          src={Globe}
          alt="Globe"
          className="xl:w-[450px] xl:h-[250px] lg:w-[300px] lg:h-[250px] md:w-[300px] md:h-[240px] sm:w-[300px] sm:h-[240px] w-[200px] h-[140px] overflow-hidden"
        />
      </Box>
    </Box>
  );
};

export default LegalNotice;
