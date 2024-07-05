import Box from "@mui/material/Box";
import React from "react";
import AnimatedGradientText from "../AnimatedGradientText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ActionButton from "../ActionButton";

interface CardProps {
  cardNum: string;
  points: string[];
  text: string;
  subText: string;
}

const ExperinceSectionCards = ({ cardNum, points, text, subText }: CardProps) => {
  return (
    <Box className="!h-full">
      <Box
        className="border-[2px] border-solid border-[--white-text] !rounded-md !min-h-[480px] !h-full overflow-visible !py-8"
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box className={"Spartan-Medium text-[--white-text] lg:!text-4xl !text-2xl !mt-0"}>
          {cardNum}
        </Box>
        <AnimatedGradientText text={text} className="lg:!text-5xl !text-3xl" />
        <Box className="Spartan-Medium text-[--white-text] lg:!text-5xl !text-3xl !mb-8">
          {subText}
        </Box>

        <Box className="flex flex-col gap-3 lg:!pl-12 !pl-10 !pr-4 flex-grow text-center">
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
                  padding: "1px 0px !important",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "20px", sm: "18px", md: "20px", lg: "22px" },
                  }}
                  className="Spartan-Medium !text-[--white-text] !text-center"
                >
                  {value}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="!mt-6 flex-shrink-0">
          <ActionButton
            text="Download E-Book"
            className="Montserrat-Regular xl:!px-8 xl:!py-3 lg:!px-6 lg:!py-3 !px-5 !py-2 xl:!text-base !text-sm"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ExperinceSectionCards;
