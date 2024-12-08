import React from "react";
import { motion } from "framer-motion";

const SuccessMessageModal = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="fixed top-[1%] right-[40%] border-green-300 border-4 p-10 font-bold rounded-xl bg-white text-center shadow-xl flex flex-row items-center justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="bg-green-300 w-3 h-3 rounded-full mx-5"></div>
      {text}
    </motion.div>
  );
};

export default SuccessMessageModal;
