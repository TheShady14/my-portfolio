"use client";
import { motion } from "framer-motion";

export default function FramerTest() {
  return (
    <div className="p-8">
      <h3 className="text-xl font-bold mb-4">Framer Motion Test</h3>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg mb-4"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2 }}
      />
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        If you can see this text animate in from the left, framer-motion is
        working!
      </motion.p>
    </div>
  );
}
