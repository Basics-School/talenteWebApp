"use client";
import CommonTab from "@/common/CommonTab";
import GradientTextCommon from "@/common/GradientTextCommon";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const Pricing = () => {
  const [selectedItem, setSelectedItem] = useState(2);
  return (
    <Box style={{ background: "var(--section-color)", height: "100vh" }}>
      <GradientTextCommon
        text="Talente Pricing & Plan"
        className="!text-5xl !mx-auto !mt-28 !items-center !justify-center !mb-8"
      />
      <CommonTab
        tab1="Monthly"
        tab2="Anually"
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </Box>
  );
};

export default Pricing;
