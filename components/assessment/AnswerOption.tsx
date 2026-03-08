"use client";

import { motion } from "framer-motion";

interface AnswerOptionProps {
  label: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

export default function AnswerOption({ label, text, selected, onClick }: AnswerOptionProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3 cursor-pointer ${
        selected
          ? "border-sage bg-green-light shadow-sm"
          : "border-gray-border bg-white hover:border-sage-light hover:bg-cream"
      }`}
    >
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors duration-200 flex-shrink-0 ${
          selected
            ? "border-sage bg-sage text-white"
            : "border-gray-border text-brown-light"
        }`}
      >
        {label}
      </span>
      <span className={`text-sm leading-relaxed ${selected ? "text-brown font-semibold" : "text-brown-light"}`}>
        {text}
      </span>
    </motion.button>
  );
}
