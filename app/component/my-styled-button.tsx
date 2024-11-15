import { Button } from "@mui/material";
import { buttonStyle } from "mui/mui-styles";
import React from "react";

import { ReactNode } from "react";

interface MyStyledButtonProps {
  children: ReactNode;
  sx?: object;
  isIcon?: boolean;
}

const StartIcon = () => {
  return (
    <img
      src="/icons/arrow-right-icon.svg"
      height={15}
      width={15}
      alt="Arrow Right"
    />
  );
};

const MyStyledButton: React.FC<MyStyledButtonProps> = ({
  children,
  sx,
  isIcon,
}) => (
  <Button sx={{ ...buttonStyle, ...sx }} startIcon={isIcon && <StartIcon />}>
    {children}
  </Button>
);

export default MyStyledButton;
