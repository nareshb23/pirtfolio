import {motion} from "framer-motion";

export const Hero =()=> {
return( 
<motion.section 
id="home" 
className="hero"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.8,delay:0.2}}
>
<div className="hero-container">
  <motion.div className="hero-content">
<motion.div className="hero-badge">
  <span> 
    👋 Hello, I'm
  </span>
</motion.div>
  </motion.div>
</div>
</motion.section>);
};