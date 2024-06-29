import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ExitButtonIcon from "@/assets/svg/ExitButtonIcon.svg";

interface IProps {
  text: string;
  color?: string;
}
const SecondaryButton: React.FC<IProps> = ({ text, color }) => {
  return (
    <Button
      style={{ backgroundColor: color }}
      className=" px-4 text-white w-[300px] rounded-full flex justify-between"
    >
      <Typography className="text-black">{text}</Typography>
      <Image src={ExitButtonIcon} alt="ExitButtonIcon image for Tasha page" className="w-[40px]" />
    </Button>
  );
};

SecondaryButton.defaultProps = {
  color: "var(--button-border)",
};

export default SecondaryButton;
