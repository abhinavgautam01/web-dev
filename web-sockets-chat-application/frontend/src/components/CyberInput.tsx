import { type InputHTMLAttributes, type ReactNode } from "react";

interface CyberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  icon: ReactNode;
  placeholder: string;
}

export const CyberInput = ({
  label,
  icon,
  placeholder,
  ...inputProps
}: CyberInputProps) => (
  <div className="group">
    <label className="text-[11px] uppercase text-cyan-700 font-bold tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors">
      {label}
    </label>
    <div className="relative flex items-center bg-[#0f172a]/80 border border-emerald-900/60 rounded overflow-hidden transition-all duration-300 group-focus-within:border-cyan-500/50 group-focus-within:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
      <div className="px-4 py-4 text-emerald-700 group-focus-within:text-cyan-400 transition-colors border-r border-white/5 bg-black/20">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        {...inputProps}
        className="w-full bg-transparent py-4 px-4 text-emerald-300 placeholder-emerald-900 focus:outline-none font-medium tracking-wide"
      />

      <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-emerald-400 to-cyan-400 transition-all duration-500 group-focus-within:w-full" />
    </div>
  </div>
);
