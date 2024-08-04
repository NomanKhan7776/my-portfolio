import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="mx-2">
          <span className="text-5xl">N</span>
          <span className="text-3xl">k</span>
        </div>
      </div>
      <div className="m-8 flex items-center justify-between gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://github.com/NomanKhan7776"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ scale: 1.5 }} href="#">
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.linkedin.com/in/noman-khan-842a29131/"
          target="_blank"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ scale: 1.5 }} href="#">
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
