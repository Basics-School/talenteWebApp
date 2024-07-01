import React from "react";
import MUIContainer from "@mui/material/Container";
import { cn } from "@/lib/cn";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: IProps) => {
  return <MUIContainer className={cn("max-w-[1366px]", className)}>{children}</MUIContainer>;
};

export default Container;
