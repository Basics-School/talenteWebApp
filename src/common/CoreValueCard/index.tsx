import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import CircleLine from "@/assets/images/circleLine-shape-white.png";

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CoreValueCardProps {
  card: Card;
}

const CoreValueCard = ({ card }: CoreValueCardProps) => {
  return (
    <>
      <Box className="coreValueCard flex flex-col bg-[--bg-gradient-color] text-white p-7 rounded-md h-full relative z-10">
        <Box className="mb-5 w-12 h-12 fill-white">
          {card.icon}
          {/* <Image src={card.icon} alt="icon" className="w-12 h-12" /> */}
        </Box>
        <Typography variant="h3" className="Spartan-SemiBold text-[26px] mb-3">
          {" "}
          {card.title}{" "}
        </Typography>
        <p className="Spartan-Regular"> {card.description} </p>
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
