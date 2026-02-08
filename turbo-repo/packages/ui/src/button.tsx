"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push("room/123")}
    >
      {children}
    </button>
  );
};
