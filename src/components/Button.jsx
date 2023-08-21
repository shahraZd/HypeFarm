"use client";
import { Button } from "@material-tailwind/react";
import "./button.css";

const ButtonComponent = ({ content, filled }) => {
  return (
    <Button
      variant={"filled"}
      // variant={filled ? "filled" : "outlined"}
      className={`${
        filled ? "bg-primary-500 text-primary-100" : "text-primary-500"
      } border-primary-500 font-extrabold hover:bg-primary-700 hover:text-primary-100  w-full `}
    >
      <span className="opacity-100">{content}</span>
    </Button>
  );
};

export { ButtonComponent };
