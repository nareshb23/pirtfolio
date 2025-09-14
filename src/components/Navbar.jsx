import { motion } from "framer-motion";
const fadeInUp={
  initial:{opacity:0,y:20},
  animate:{opacity:1,y:0},
  transition:{duration:0.6},
};
const staggerContainer={
  
  animate:{
  transition:{
  staggerChildren: 0.1,
  },
},
};

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/mine.jpeg" alt="Profile" className="mine" />
        <img></img>
        Naresh Baral
      </motion.div>
      <motion.ul 
      className="nav-link"
      variants={staggerContainer} initial="initial" animate="animate"
      >
        <motion.li 
        variants={fadeInUp}
        whileHover={{scale:1.1}}
        whileTab={{scale:0.95}}
        >
          <a>Home</a>
        </motion.li>

        <motion.li 
        variants={fadeInUp}
        whileHover={{scale:1.1}}
        whileTab={{scale:0.95}}
        >
          <a>Projects</a>
        </motion.li>

        <motion.li 
        variants={fadeInUp}
        whileHover={{scale:1.1}}
        whileTab={{scale:0.95}}
        >
          <a>Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
