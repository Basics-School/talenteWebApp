import { List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

interface Card {
  title: string;
  price: string;
  points: string[];
}

interface PricingInfoCardProps {
  card: Card;
  classes?: string;
}

const PricingInfoCard = ({ card }: PricingInfoCardProps) => {
  return (
    <>
      <Box className={"w-full tab:w-1/2 md:w-1/3 p-3 relative z-10"}>
        <Box className="flex flex-col justify-between border-2 border-[#ececec] !overflow-hidden rounded-xl sm:p-12 p-6 sm:px-7 px-4 h-full relative transition-transform hover:-translate-y-1 bg-white text-black">
          <Box>
            <Typography
              variant="h4"
              className="Spartan-Medium text-black sm:text-[20px] text-[18px]"
            >
              {card?.title}
            </Typography>
            <Typography variant="h3" className="Spartan-Bold text-black sm:text-[30px] text-[24px]">
              {card?.price}
            </Typography>
            <Box className="Spartan-Medium text-[14px] mt-3">
              <List
                sx={{
                  listStyleType: "disc",
                }}
              >
                {card?.points.map((point, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      color: "#000",
                      padding: "1px 0px !important",
                      marginLeft: "1rem",
                    }}
                    disablePadding
                    classes="Montserrat-Medium text-white text-lg"
                  >
                    <p className="text-black">{point}</p>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box className="text-center sm:mt-12 mt-6">
            <button className="bg-black py-2 md:px-12 sm:px-9 px-6 rounded text-white">
              Get Stated
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PricingInfoCard;
