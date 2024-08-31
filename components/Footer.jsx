'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Naman Malhotra
        </h4>
        <a href="https://www.chitkara.edu.in/">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img src="/Chitkara.png" alt="chitkara" className="w-[24px] h-[24px] object-contain" />
            <span className="font-normal text-[16px] text-white">
              Chitkara University
            </span>
          </button>
        </a>

        <a href="#footer" onClick={()=>{window.open("https://github.com/NamanMalhotra1706")}}>
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img src="/gitHub.svg" alt="chitkara" className="w-[34px] h-[34px] object-contain" />
            <span className="font-normal text-[16px] text-white">
              GitHub Profile
            </span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            CSE Student
          </h4>
          <h4 className="font-extrabold text-[24px] text-white">
            +91 62397-26566
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2025 Naman Malhotra. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://instagram.com/naman_malhotra683?igshid=MTIzZWQxMDU="><img src="/instagram.svg" className="w-[24px] h-[24px] object-contain cursor-pointer" />{/* eslint-disable-next-line */}</a>
            <a href="https://www.linkedin.com/in/naman-malhotra-54205423b/"><img src="/linkedin.svg" className="w-[24px] h-[24px] object-contain cursor-pointer" />{/* eslint-disable-next-line */}</a>
            <a href="https://twitter.com/NamanMalhotra68"><img src="/twitter.svg" className="w-[24px] h-[24px] object-contain cursor-pointer" />{/* eslint-disable-next-line */}</a>
            <a href="https://www.facebook.com/rakhi.malhotra.773"><img src="facebook.svg" className="w-[24px] h-[24px] object-contain cursor-pointer" />{/* eslint-disable-next-line */}</a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);
export default Footer;
