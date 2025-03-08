import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const PopUpBase = ({ title = "", children = null, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className=" fixed inset-0 flex justify-center items-center z-50 bg-black/50"
      onClick={onClick}
    >
      <div
        className=" bg-white border-1 border-primary p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h2 className="text-xl font-bold relative after:content-[''] after:block after:h-1 after:bg-gradient-to-r after:bg- after:from-primary after:over-secondary after:to-outline-ui after:mt-1">
              {title}
            </h2>
          )}
          <button onClick={onClick}>
            <IoCloseOutline
              size={24}
              className="text-primary hover:text-secondary hover:scale-110 hover:rotate-90 transition duration-300 cursor-pointer"
            />
          </button>
        </div>
        <div className="overflow-auto max-h-[70vh] p-2">{children}</div>
      </div>
    </motion.div>
  );
};

export default PopUpBase;
