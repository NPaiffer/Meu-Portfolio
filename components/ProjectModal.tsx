"use client";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export default function ProjectModal({ isOpen, onClose, title, description }: Props) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-[#222] text-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-cyan-400 text-xl"
        >
          ✕
        </button>
        <h4 className="text-2xl font-semibold text-cyan-400">{title}</h4>
        <p className="mt-4 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
