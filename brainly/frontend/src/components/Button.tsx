import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-[#5147e4] text-white",
  secondary: "bg-[#e1e7ff] text-[#4a43b2]",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
const defaultStyles = "rounded-xl p-2 flex gap-2 items-center";

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles} ${
          sizeStyles[props.size]
        }`}
      >
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </button>
    </>
  );
};
