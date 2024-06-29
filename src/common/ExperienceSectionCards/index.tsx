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
    <Box className="xl:!max-w-[370px] lg:!max-w-[300px] !max-w-[220px]">
      <Box
        className="border-[2px] border-solid border-[--white-text] !rounded-md xl:!h-[626px] lg:!h-[550px]"
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box className="Spartan-Medium text-[--white-text] lg:!text-4xl !text-2xl !mt-12">
          {cardNum}
        </Box>
        <AnimatedGradientText text={text} className="lg:!text-4xl !text-2xl" />
        <Box className="Spartan-Medium text-[--white-text] xl:!text-5xl lg:!text-4xl !text-2xl !mb-8">
          {subText}
        </Box>

        <Box className="flex flex-col gap-3 xl:!pl-8 lg:!pl-12 !pl-10 !pr-4 flex-grow">
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
                    fontSize: { xs: "20px", sm: "18px", md: "20px", lg: "25px", xl: "30px" },
                  }}
                  className="Spartan-Medium !text-[--white-text]"
                >
                  {value}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="!my-6 flex-shrink-0">
          <ActionButton
            text="Download E-Book"
            className="Montserrat-Regular xl:!px-8 xl:!py-3 lg:!px-5 lg:!py-2 !px-5 !py-1 xl:!text-base !text-sm"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ExperinceSectionCards;
