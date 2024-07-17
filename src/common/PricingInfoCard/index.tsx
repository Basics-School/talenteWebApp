import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React from "react";
import GradientTextCommon from "../GradientTextCommon";

interface Card {
  title: string;
  subtitle: string;
  price: string;
  points: string[];
  recommended?: boolean;
}

interface PricingInfoCardProps {
  card: Card;
  classes?: string;
}

const PricingInfoCard = ({ card }: PricingInfoCardProps) => {
  return (
    <>
      {/* <Box className="flex !my-4 pr- 0 md:pr-6">
        <Box className="Montserrat-Bold !text-xl bgCircle xl:!w-44 xl:!h-44 md:!w-42 md:!h-42 !w-[11rem] !h-[11rem] !-mr-11 z-20 flex flex-col !text-center !justify-center">
          {card?.recommended && (
            <Box>
              <Typography className="Montserrat-Medium border--fix2 linear-bg2 text-[14px] rounded-md w-36 mx-auto text-white" />
            </Box>
          )}
          <span>{card.title}</span>
          <span className="Montserrat-SemiBold !text-base !mx-auto">{card.subtitle}</span>
        </Box>
        <Box className="bgCard !text-[--white-text] lg:!w-[750px] md:!w-[600px] sm:!w-[550px] !w-[300px] xl:!min-h-[130px] md:!min-h-[125px] !min-h-[135px] !my-auto !py-2 flex !items-center">
          <List
            sx={{
              listStyleType: "disc",
              padding: "0px 10px",
              width: { lg: "700px", md: "500px", xs: "270px" },
              lineHeight: "1",
            }}
          >
            {card.points.map((point, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  color: "#fff",
                  padding: "0px 0px !important",
                  width: "fit-content",
                  marginLeft: { xl: "6rem", lg: "5rem", md: "4.5rem", xs: "3.6rem" },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "12.5px", sm: "14px", md: "14px", lg: "15px" },
                  }}
                  className="Spartan-Medium !text-[--white-text]"
                >
                  {point}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box> */}
      <Box className={"w-full tab:w-1/2 md:w-1/3 p-3 relative z-10"}>
        <Box
          className={`border-2 border-[#ececec] !overflow-hidden rounded-xl p-12 px-7 h-full relative transition-transform hover:-translate-y-1 ${card.recommended ? "priceCard-recommend text-white" : "bg-white text-[#5c5c5c]"} text-center`}
        >
          {card?.recommended && (
            <Box className="absolute w-[140px] top-0 left-1/2 -translate-x-1/2 bg-white text-[--bg-gradient-color] Spartan-SemiBold px-5 py-1 text-[14px] uppercase">
              Recommended
            </Box>
          )}
          <Typography variant="h4" className="Spartan-SemiBold text-[20px]">
            {card?.title}
          </Typography>
          {!card?.recommended && (
            <GradientTextCommon
              text={card?.price}
              className="!Spartan-Bold text-[45px] justify-center"
            />
          )}
          {card?.recommended && (
            <Typography variant="h3" className="Spartan-Bold text-[45px] mt-3 mb-2">
              {card?.price}
            </Typography>
          )}
          {/* <Typography variant="h3" className="Spartan-Bold text-[45px] mt-3 mb-2">{card?.price}</Typography> */}
          <Typography className="Spartan-Medium text-[16px]">{card?.subtitle}</Typography>
          <Divider className={`my-4 ${card.recommended ? "border-[#fff]" : "border-[#5c5c5c]"}`} />
          <Box className="text-left">
            <Box className="Spartan-Medium text-[14px]">
              {card?.points.map((point, index) => (
                <Box key={index} className="flex mb-2">
                  <Box className="mr-3">
                    <CheckBoxIcon
                      className={`${card.recommended ? "text-white" : "text-[--bg-gradient-color]"}`}
                    />
                  </Box>
                  <Typography className="Spartan-Medium text-[18px] leading-[1.5]">
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PricingInfoCard;
