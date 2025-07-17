"use client";

import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

interface MobilebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Mobilebar({ isOpen, onClose }: MobilebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-[300px] h-full bg-background dark:bg-secondary border-r border-line z-50"
      >
        <Sidebar onClose={onClose} />
      </motion.div>
    </>
  );
}
