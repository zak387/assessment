"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "@/data/questions";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (label: string) => void;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export default function QuestionCard({ question, selectedAnswer, onSelect, direction }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3">
          {question.category}
        </p>
        <h2 className="text-xl font-bold text-brown mb-6 leading-snug">
          {question.question}
        </h2>
        <div className="flex flex-col gap-3">
          {question.options.map((option) => (
            <AnswerOption
              key={option.label}
              label={option.label}
              text={option.text}
              selected={selectedAnswer === option.label}
              onClick={() => onSelect(option.label)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
