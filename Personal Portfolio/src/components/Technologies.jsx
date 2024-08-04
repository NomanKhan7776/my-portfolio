import {
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={container(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TiHtml5 className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={container(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoCss3 className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={container(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-5xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={container(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={container(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-5xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={container(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-5xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={container(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={container(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-5xl text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
