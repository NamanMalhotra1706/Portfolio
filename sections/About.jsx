'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn,staggerContainer } from '../utils/motion';

const About = () => (

  <section className={`${styles.paddings} realtive z-10`}>
   <div className="gradient-02 z-0" />
   <motion.div variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once:false,amount:0.25}} 
   className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      
    <TypingText title="| About Me"
      textStyles="text-center"/>
      
  
    <div className="flex flex-nowrap mt-12 ml-0">
    <motion.div 
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className="w-full flex justify sm:-mt-[0px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/me.jpeg"
              alt="me"
              className="rounded-full sm:w-[180px] w-[100px] sm:h-[180px] h-[100px]"
            />
  </motion.div>
  <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
       
        <span className="font-extrabold text-white">Hey!</span> My self <span className="font-extrabold text-white">Naman Malhotra</span>, I am
        Full Stack Developer from India . I am a dediacted to the quest of developing solution that leverage on best practice technologies 
        to deliver over the top user experience . I have a Create a <span className="font-extrabold text-white">Job Portral</span> and Some Small web Projects 
        which contains <span className="font-extrabold text-white">MERN</span>  and one Little Project on <span className="font-extrabold text-white">MOTOKO</span> and looking forward to work on <span className="font-extrabold text-white">3JS and Web3</span>.

        
      </motion.p>
    </div>
    <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

</motion.div>
  </section>
);

export default About;
