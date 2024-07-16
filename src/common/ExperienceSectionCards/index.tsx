import Box from "@mui/material/Box";
import React from "react";
import AnimatedGradientText from "../AnimatedGradientText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import ActionButton from "../ActionButton";
import { Typography } from "@mui/material";

interface CardProps {
  cardNum: string;
  points: string[];
  text: string;
  subText: string;
  icon?: React.ReactNode;
  detailText?: string;
  num?: number;
}

const ExperinceSectionCards = ({
  cardNum,
  points,
  text,
  subText,
  detailText,
  icon,
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
        <Box
          className={"Spartan-Medium text-[--white-text] lg:!text-4xl !text-2xl px-[20px] !mt-0"}
        >
          {cardNum}
        </Box>
        {icon && <Box className="w-16 h-16 mx-auto my-4">{icon}</Box>}
        <Box className="Spartan-Medium text-[--white-text] lg:!text-3xl !text-2xl px-[20px] !mb-0">
          {text}
        </Box>
        <AnimatedGradientText
          text={subText}
          className="lg:!text-3xl !text-2xl !ml-0 tab:!mx-auto px-[20px] tab:!px-[10px]"
        />

        <Box>
          <Typography className="Spartan-Medium text-[22px] text-white text-center !mx-auto px-[10px] mb-5">
            {detailText}
          </Typography>
        </Box>

        <Box className="flex flex-col gap-3 lg:!pl-12 pl-[40px] tab:!pl-10 !pr-4 flex-grow tab:text-center">
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
                  className="Spartan-Medium !text-[--white-text]"
                >
                  {value}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* <Box className="!mt-6 flex-shrink-0 text-center">
          <ActionButton
            text="Download E-Book"
            className="Montserrat-Regular xl:!px-8 xl:!py-3 lg:!px-6 lg:!py-3 !px-5 !py-2 xl:!text-base !text-sm mx-[20px] tab:mx-0"
          />
        </Box> */}
      </Box>
    </Box>
  );
};

export default ExperinceSectionCards;
