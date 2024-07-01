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
      className=" px-4 w-[350px] !rounded-full flex justify-between lg:!w-[370px] lg:!h-[48px]"
    >
      <Typography className="Montserrat-Medium !text-[var(--black-color)] pl-4 !normal-case !text-lg">
        {text}
      </Typography>
      <Image
        src={ExitButtonIcon}
        alt="ExitButtonIcon image for Tasha page"
        className="!w-[50px] !h-[50px] !-mr-3 "
      />
    </Button>
  );
};

SecondaryButton.defaultProps = {
  color: "var(--button-border)",
};

export default SecondaryButton;
