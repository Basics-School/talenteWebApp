import React, { useState } from "react";
import WaitlistModal from "../WaitlistModal";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  openDialog?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  openDialog = false,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClick = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <button
        className={`border-2 rounded-full lg:px-10 lg:py-2 ${className}`}
        onClick={openDialog ? handleClick : onClick}
      >
        {children}
      </button>
      {dialogOpen && <WaitlistModal open={dialogOpen} onClose={handleCloseDialog} />}
    </>
  );
};

export default Button;
