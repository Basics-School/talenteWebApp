import React from "react";
import MUIContainer from "@mui/material/Container";

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return <MUIContainer className="max-w-[1366px] mx-auto">{children}</MUIContainer>;
};

export default Container;
