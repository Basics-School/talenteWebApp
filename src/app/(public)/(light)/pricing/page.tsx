"use client";
import CommonTab from "@/common/CommonTab";
import GradientTextCommon from "@/common/GradientTextCommon";
import PricingInfoCard from "@/common/PricingInfoCard";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useState } from "react";
import "./pricingStyles.css";
import RightCirclePricing from "@/assets/svg/RightCirclePricing.svg";
import LeftCirclePricing from "@/assets/svg/LeftCirclePricing.svg";
import LeftDottedCircle from "@/assets/svg/LeftDotttedCircle.svg";
import RightDottedCircle from "@/assets/svg/RightDottedCircle.svg";
import Decoration from "@/assets/svg/Decoration.svg";
import Container from "@/components/Container";
import { Typography } from "@mui/material";

const card1 = {
  title: "Basic",
  price: "$0",
  subtitle: "For One Month",
  points: [
    "Basic Profile",
    "Limited chat support",
    "Access to Career Hub - Community Forums",
    "Professional Networking",
    "Peer-to-Peer Q&A",
  ],
};
const card2 = {
  recommended: true,
  title: "Premium",
  price: "$49.99",
  subtitle: "For One Month",
  points: [
    "All Basic features plus",
    "Tasha: AI HR & Career Assistant",
    "Personalized Career Dashboard",
    "Job Search",
    "Resume Optimization",
    "Interview Preparation",
  ],
};

const card3 = {
  title: "Elite",
  price: "$59.99",
  subtitle: "For One Month",
  points: [
    "All Premium features plus",
    "Industry Watch",
    "Personalized Compensation Strategies",
    "Exclusive Masterclasses and Webinars with Industry Experts",
    "1-on-1 Assistance with Complex Work-Related Issues",
  ],
};

const card4 = {
  title: "Basic",
  price: "$0",
  subtitle: "Month On Annual Plan",
  points: [
    "Basic Profile",
    "Limited chat support",
    "Access to Career Hub - Community Forums",
    "Professional Networking",
    "Peer-to-Peer Q&A",
  ],
};
const card5 = {
  recommended: true,
  title: "Premium",
  price: "$44.99",
  subtitle: "Month On Annual Plan",
  points: [
    "All Basic features plus",
    "Tasha: AI HR & Career Assistant",
    "Personalized Career Dashboard",
    "Job Search",
    "Resume Optimization",
    "Interview Preparation",
  ],
};
const card6 = {
  title: "Elite",
  price: "$54.99",
  subtitle: "Month On Annual Plan",
  points: [
    "All Premium features plus",
    "Industry Watch",
    "Personalized Compensation Strategies",
    "Exclusive Masterclasses and Webinars with Industry Experts",
    "1-on-1 Assistance with Complex Work-Related Issues",
  ],
};

const Pricing = () => {
  const [selectedItem, setSelectedItem] = useState(2);
  return (
    <Box
      style={{
        background: "var(--section-color)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="absolute !my-auto !left-0 bottom-1/3">
          <Image
            draggable="false"
            src={LeftCirclePricing}
            alt="Customer Support Image"
            className="!h-20 !w-10"
          />
        </div>
        <div className="absolute animates !my-auto bottom-0 left-0">
          <Image
            draggable="false"
            src={LeftDottedCircle}
            alt="Customer Support Image"
            className="!w-[220px] !h-[220px]"
          />
        </div>
        <GradientTextCommon
          text="Pricing & Plans"
          className="md:!text-5xl !text-3xl !mx-auto !mt-28 !items-center !justify-center !mb-8"
        />
        <CommonTab
          tab1="Monthly"
          tab2="Anually"
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <Typography className="Montserrat-Regular !mx-auto mb-0 mt-10 text-center !text-[--white-block] xl:text-[18px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
          Choose a Plan to Take Charge of Your Career Today.
        </Typography>
        <Typography className="Montserrat-Regular !mx-auto mb-0 text-center !text-[--white-block] xl:text-[18px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
          Free 3-Day Trial on Premium and Elite Plans. Monthly Subscription Starts After Trial Ends.
        </Typography>
        <Typography className="Montserrat-Regular !mx-auto mb-0 text-center !text-[--white-block] xl:text-[18px] lg:text-[18px] text-[16px] max-w-auto md:max-w-[1000px] ">
          Cancel Anytime.
        </Typography>

        {/* <Box className="flex lg:!flex-row !flex-col !justify-between !items-center !mt-4 xl:!mb-0 !mb-10">
          <Box>
            <PricingInfoCard card={selectedItem === 1 ? card1 : card4} />
            <PricingInfoCard card={card2} />
            <PricingInfoCard card={card3} />
          </Box>
          <Box className="flex flex-col justify-center lg:!gap-8 !gap-2 xl:!mt-0 !mt-4">
            <Box>
              <div className="borderImgPricing !my-auto">
                <Image
                  draggable="false"
                  src={PricingSectionImg}
                  alt="Customer Support Image"
                  className="!bg-[--img-bg]"
                />
              </div>
            </Box>
            <Button className="Montserrat-Medium !normal-case linear-bg2 !w-fit !text-[--white-text] xl:!px-10 !px-7 !py-2 !rounded-full !mx-auto z-20 xl:!text-base !text-sm">
              JOIN WAITLIST
            </Button>
          </Box>
        </Box> */}
        <Box className={"flex flex-wrap my-10 gap-y-3 tab:gap-0"}>
          <PricingInfoCard card={selectedItem === 1 ? card1 : card4} />
          <PricingInfoCard card={selectedItem === 1 ? card2 : card5} />
          <PricingInfoCard card={selectedItem === 1 ? card3 : card6} />
        </Box>
        <div className="absolute !my-auto right-0 top-1/4">
          <Image
            draggable="false"
            src={RightCirclePricing}
            alt="Customer Support Image"
            className="!h-20 !w-10"
          />
        </div>
        <div className="absolute animates !my-auto bottom-0 right-0">
          <Image
            draggable="false"
            src={RightDottedCircle}
            alt="Customer Support Image"
            className="!w-[220px] !h-[220px]"
          />
        </div>
        <div className="absolute !my-auto bottom-0 xl:!right-2/3 !right-1/4">
          <Image
            draggable="false"
            src={Decoration}
            alt="Customer Support Image"
            className="xl:!w-16 xl:!h-16 !w-12 !h-12"
          />
        </div>
      </Container>
    </Box>
  );
};

export default Pricing;
