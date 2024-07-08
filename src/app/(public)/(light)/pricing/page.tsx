"use client";
import CommonTab from "@/common/CommonTab";
import GradientTextCommon from "@/common/GradientTextCommon";
import PricingInfoCard from "@/common/PricingInfoCard";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useState } from "react";
import PricingSectionImg from "@/assets/images/PricingImg.png";
import "./pricingStyles.css";
import Button from "@mui/material/Button";
import RightCirclePricing from "@/assets/svg/RightCirclePricing.svg";
import LeftCirclePricing from "@/assets/svg/LeftCirclePricing.svg";
import LeftDottedCircle from "@/assets/svg/LeftDotttedCircle.svg";
import RightDottedCircle from "@/assets/svg/RightDottedCircle.svg";
import Decoration from "@/assets/svg/Decoration.svg";
import Container from "@/components/Container";

const card1 = {
  title: "Essential",
  subtitle: "No Cost",
  points: ["Limited on-demand support", "Access to community boards for networking and support"],
};
const card2 = {
  title: "Premium",
  subtitle: "$39.99/mo",
  points: [
    "All Essential features",
    "Access to Performance Management and Compensation Benchmarking",
    "Resume refinement",
    "Interview preparation",
  ],
};
const card3 = {
  title: "Elite",
  subtitle: "$59.99/mo",
  points: [
    "All Premium features",
    "Personalized Career Advancement tools",
    "Access to exclusive masterclasses and webinars",
    "Assistance with complex work-related issues",
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
          text="Talente Pricing & Plan"
          className="md:!text-5xl !text-3xl !mx-auto !mt-28 !items-center !justify-center !mb-8"
        />
        <CommonTab
          tab1="Monthly"
          tab2="Anually"
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Box className="flex lg:!flex-row !flex-col !justify-between !items-center !mt-4 xl:!mb-0 !mb-10">
          <Box>
            <PricingInfoCard card={card1} />
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
        <div className="absolute !my-auto bottom-0 xl:!right-1/3 !right-1/4">
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
