import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

interface CustomButtonProps {
  href: string;
  title: string;
}

const StyledButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  fontSize: "15px",
  lineHeight: "18.97",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "18.5px 30px",
  borderRadius: "32px",
  textTransform: "none",
  fontWeight: 500,
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
    fontSize: "14px",
    lineHeight: "17.71",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({ href, title }) => {
  return (
    <div>
      <Link href={href}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </div>
  );
};

export default CustomButton;
