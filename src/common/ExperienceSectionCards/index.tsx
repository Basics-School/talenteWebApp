import Box from "@mui/material/Box";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Image from "next/image";

interface CardProps {
  cardNum: string;
  points: string[];
  text: string;
  subText: string;
  img?: string;
  detailText?: string;
  num?: number;
}

const ExperinceSectionCards = ({
  cardNum,
  points,
  text,
  subText,
  detailText,
  img,
  num,
}: CardProps) => {
  return (
    <Box className="!h-full">
      <Box
        className={`border-[0px] homecard${num} border-solid border-[--white-text] !rounded-md min-h-auto md:min-h-[480px] !h-full overflow-visible !py-8 text-left tab:text-center`}
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box className="mb-4 tab:text-center">
          <Box
            component="span"
            className="Spartan-Light text-[--white-text] inline-grid place-items-center w-[35px] h-[35px] border rounded-full !text-[16px] leading-[2.2]"
          >
            {cardNum}
          </Box>
        </Box>
        {img && (
          <div className="relative w-16 h-16 tab:!mx-auto my-4 ml-0">
            <Image src={img} alt="icon" layout="fill" />
          </div>
        )}
        <h3 className="Spartan-Medium text-[--white-text] tab:px-[20px] sm:mt-5 mt-3 mb-1 tab:text-center">
          {text}
        </h3>
        <h2 className="Spartan-SemiBold text-amber-400 sm:mb-5 mb-3 !text-center overflow-wrap break-words !mx-auto lg:!text-[30px] !text-2xl !ml-0 tab:!mx-auto">
          {subText}
        </h2>

        <div className="mb-2">
          <Typography className="Montserrat-Regular text-[20px] text-white text-left !mx-auto !px-0 tab:px-[10px] leading-[1.1]">
            {detailText}
          </Typography>
        </div>

        <Box className="flex flex-col gap-3 flex-grow tab:text-center">
          <List
            sx={{
              listStyleType: "disc",
              padding: { xl: "0px 30px", lg: "0px 25px" },
            }}
          >
            {points.map((value) => (
              <ListItem
                key={value}
                sx={{
                  display: "list-item",
                  color: "#fff",
                  padding: "2px 0px !important",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "20px", sm: "18px", md: "20px" },
                  }}
                  className="Montserrat-Regular !text-[--white-text]"
                >
                  {value}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperinceSectionCards;
