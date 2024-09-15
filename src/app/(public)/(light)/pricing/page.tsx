"use client";
import CommonTab from "@/common/CommonTab";
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
import Button from "@/components/Button";

const card1 = {
  title: "Free",
  price: "$0",
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
  title: "Pro",
  price: "$49.99",
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
  title: "Team",
  price: "$59.99",
  points: [
    "All Premium features plus",
    "Industry Watch",
    "Personalized Compensation Strategies",
    "Exclusive Masterclasses and Webinars with Industry Experts",
    "1-on-1 Assistance with Complex Work-Related Issues",
  ],
};

const card4 = {
  title: "Free",
  price: "$0/mo",
  points: ["Basic Profile", "Talk to Tasha on the Web, iOS and Android", "Access to Career Hub"],
};
const card5 = {
  title: "Pro",
  price: "$25.00 per person/month",
  points: [
    "Everything in Free plus",
    "Higher Usage Limits versus Free",
    "Personalized Career Dashboard",
    "Job Search",
    "Resume Optimization",
    "Interview Preparation",
    "Early access to new features",
  ],
};
const card6 = {
  title: "Team",
  price: "$30 per person/month*",
  points: [
    "Everything in Pro plus",
    "Higher Usage Limits versus Pro",
    "Centralized Billing and Administration",
  ],
};

const Pricing = () => {
  const [selectedItem, setSelectedItem] = useState(2);
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, var(--black-color), var(--bg-gradient-color)) !important",
      }}
      className="overflow-hidden relative min-h-[100vh] pt-40 pb-10"
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
        <h2 className="Spartan-SemiBold text-[#ffb54d] !text-center overflow-wrap break-words !mx-auto xl:!mt-4 !mt-3 px-[10px] mb-10">
          Pricing & Plans
        </h2>
        <CommonTab
          tab1="Monthly"
          tab2="Anually"
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <Typography className="text-white Montserrat-Medium !mx-auto mb-0 mt-10 text-center xl:text-2xl max-w-auto md:max-w-[1200px] ">
          Choose a Plan to Take Charge of Your Career Management Today.
        </Typography>
        <Typography className="text-white Montserrat-Medium !mx-auto mb-0 text-center xl:text-2xl max-w-auto md:max-w-[1200px] ">
          Free 7-Day Trial on Pro and Team Plans. Monthly Subscription Starts After Trial Ends.
        </Typography>
        <Typography className="text-white Montserrat-Medium !mx-auto mb-0 text-center xl:text-2xl max-w-auto md:max-w-[1200px] ">
          Cancel Anytime.
        </Typography>
        <Box className={"pricing-Cards-wrapper flex flex-wrap my-10 gap-y-3 tab:gap-0"}>
          <PricingInfoCard card={selectedItem === 1 ? card1 : card4} />
          <PricingInfoCard card={selectedItem === 1 ? card2 : card5} />
          <PricingInfoCard card={selectedItem === 1 ? card3 : card6} />
        </Box>
        <div>
          <p className="text-[14px]">
            * Price billed annually, $35 Per person / month if billed monthly. Minimum 5 members.
          </p>
        </div>
        <div className="text-center mt-12">
          <Button
            openDialog
            className="bg-cyan-400 rounded-md py-2 px-6 font-bold sm:text-xl text-lg border-none"
          >
            Learn about Talente Team
          </Button>
        </div>
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
