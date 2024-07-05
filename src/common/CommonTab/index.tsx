import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

interface IProps {
  selectedItem: number;
  tab1: string;
  tab2: string;
  // eslint-disable-next-line no-unused-vars
  setSelectedItem: (value: number) => void;
}

const CommonTab = ({ selectedItem, tab1, tab2, setSelectedItem }: IProps) => {
  const handleTabChange = (event: React.SyntheticEvent, value: number) => {
    setSelectedItem(value);
  };

  return (
    <Box className="!text-center">
      <Box
        sx={{ border: "1px solid var(--border-tab)" }}
        className="!relative !rounded-full !inline-grid !bg-[--white-text]"
      >
        <Tabs
          value={selectedItem}
          onChange={handleTabChange}
          className="!inline-grid !grid-flow-col !auto-cols-auto !gap-1 !cursor-pointer !min-h-0"
        >
          <Tab
            label={tab1}
            value={1}
            className={`Spartan-Medium !px-12 paddingTabs py-[6px] !rounded-full !border-none !cursor-pointer !text-[--black-color] lg:!text-lg !text-base !normal-case !h-fit !min-h-0 ${selectedItem === 1 ? "bgButton !text-[--white-text] !rounded-full" : ""}`}
          />
          <Tab
            label={tab2}
            value={2}
            className={`Spartan-Medium !px-12 paddingTabs py-[6px] !rounded-full !border-none !cursor-pointer !text-[--black-color] lg:!text-lg !text-base !normal-case !h-fit !min-h-0 ${selectedItem === 2 ? "bgButton !text-[--white-text] !rounded-full" : ""}`}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default CommonTab;
