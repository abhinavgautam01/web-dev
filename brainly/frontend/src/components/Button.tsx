import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  text: string;
  startIcon?: ReactElement;
}

const variantStyles = {
  primary: "bg-[#5147e4] text-white",
  secondary: "bg-[#e1e7ff] text-[#4a43b2]",
};

const defaultStyles = "rounded-lg px-4 py-2 flex gap-2 items-center";

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className={`${variantStyles[props.variant]} ${defaultStyles}`}
      >
        {props.startIcon}
        {props.text}
      </button>
    </>
  );
};
