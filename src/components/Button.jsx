"use client";
import { Button } from "@material-tailwind/react";
import "./button.css";

const ButtonFilled = ({ content }) => {
  return (
    <button className="fill-btn text-base  bg-primary-500 hover:bg-primary-700 text-primary-1000 hover:text-primary-100 font-bold py-1 px-4 ">
      {content}
    </button>
  );
};

const ButtonTransparent = ({ content }) => {
  return (
    <div>
      {/* <button
        className="arrow_btn text-base  bg-transparent font-bold "
        type="button"
        data-modal="video"
        data-video="https://ninjapromo.io/wp-content/uploads/2022/04/NinjaPromo_fin.mp4"
      >
        {content}
      </button> */}
    </div>
  );
};

const ButtonOutlined = ({ content }) => {
  return (
    // <Button
    //   variant="outlined"
    //   className="border-primary-500 text-primary-500 hover:bg-primary-700 hover:text-primary-100 hover:opacity-100  "
    // >
    //   <span className="opacity-100">{content}</span>
    // </Button>
    <button className="bg-transparent text-primary-500 hover:text-primary-100 font-bold border-primary-500 py-1 px-4  ">
      {content}
    </button>
  );
};

export { ButtonOutlined, ButtonFilled, ButtonTransparent };
