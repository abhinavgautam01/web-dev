import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import React from "react";

interface CyberButtonProps {
  children: React.ReactNode;
  variant: "host" | "join";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

export const CyberButton = ({ children, variant, onClick }: CyberButtonProps) => {
  const baseClasses =
    "relative w-full py-4 mt-2 rounded font-bold uppercase tracking-widest overflow-hidden group transition-all duration-300 flex items-center justify-center gap-3";

  const hostClasses =
    "bg-emerald-900/20 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)]";

  const joinClasses =
    "bg-[#0f172a] border border-emerald-800 hover:border-cyan-500 text-emerald-500 hover:text-cyan-400 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]";

  const buttonClasses = variant === "host" ? hostClasses : joinClasses;

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={onClick}>
      {variant === "host" && (
        <>
          <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </>
      )}

      <span
        className={`relative z-10 flex items-center justify-center gap-3 transition-colors ${
          variant === "host" ? "group-hover:text-white" : ""
        }`}
      >
        {children}
        <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};