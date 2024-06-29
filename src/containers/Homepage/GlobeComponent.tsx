import React from "react";
import Image from "next/image";
import Globe from "@/assets/svg/Globe.svg";
import Box from "@mui/material/Box";

const GlobeComponent = () => {
  return (
    <Box className="absolute lg:-bottom-16 md:-bottom-10 -bottom-5 xl:!-right-[8.5rem] lg:-right-20 md:-right-20 -right-20 z-10">
      <Image
        draggable="false"
        src={Globe}
        alt="Globe"
        className="xl:!w-[560px] xl:!h-[500px] lg:!w-[437px] lg:!h-[431px] sm:!w-[390px] sm:!h-[390px] !w-[290px] !h-[290px] spinGlobe"
      />
    </Box>
  );
};

export default GlobeComponent;
