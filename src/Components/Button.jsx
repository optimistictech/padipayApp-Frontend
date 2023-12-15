import React from "react";

export const Button = ({ text, className, size, noborder }) => {
  const mapSizeToStyle = {
    sm: "px-4 py-2",
    md: "px-5 py-3 text-lg font-medium",
    lg: "w-[190px] py-2",
    "2xl": "px-16 py-3",
  };

  return (
    <button
      className={`bg-primary text-whiteColor border-whiteColor rounded-md hover:bg-blue-700 transition ease-in-out delay-150 ${className} ${
        mapSizeToStyle[size || "sm"]
      } ${noborder ? "border-none" : "border"}`}
    >
      {text}
    </button>
  );
};

export default Button;
