import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CircleLine from "@/assets/images/circleLine-shape-white.png";

interface Card {
  title: string;
  description: string;
  icon: string;
}

interface CoreValueCardProps {
  card: Card;
  classes?: string;
}

const CoreValueCard = ({ card }: CoreValueCardProps) => {
  return (
    <>
      <Box className="flex flex-col bg-[--bg-gradient-color] text-white p-7 rounded-md h-full relative z-10">
        <Box className="mb-5">
          <Image src={card.icon} alt="icon" className="w-12 h-12" />
        </Box>
        <Typography variant="h3" className="Spartan-SemiBold text-[26px] mb-3">
          {" "}
          {card.title}{" "}
        </Typography>
        <Typography variant="body1" className="Spartan-Regular">
          {" "}
          {card.description}{" "}
        </Typography>
        <Box>
          {/* eslint-disable-next-line */}
          <img
            src={CircleLine.src}
            alt="Circle Line"
            className="w-[100px] h-[100] absolute -bottom-8 -right-8 opacity-30 spinGlobe"
          />
        </Box>
      </Box>
    </>
  );
};

export default CoreValueCard;