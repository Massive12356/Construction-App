import React from 'react'
import heroimg from '../assets/heroimg.png'
import backgroundImage from '../assets/homeimg.webp'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants } from './animation'

const Hero = () => {
  return (
    <div id="hero" className='bg-black w-full lg:h-[800px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col-reverse lg:gap-5 gap-[50px] bg-cover bg-center' style={{backgroundImage:`url(${backgroundImage})`}}>

        <motion.div initial="hidden" whileInView="visible" variants={slideUpVariants} className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>
            <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>WE ARE BUILDERS</motion.h1>

            <motion.h1 variants={slideUpVariants} className='text-white uppercase md:text-[50px] text-[37px] font-bold'> We will Build Your Dream</motion.h1>
            <div className='w-[170px] h-[6px] bg-yellow-500 '></div>
            <p className=' text-white md:text-[20px] text-justify'>Bringing Your Dream to Life

At BIBI-NTI Construction, we specialize in turning your vision into reality. With a passion for excellence and a commitment to quality, we craft spaces that inspire and endure. Whether it’s your dream home or a state-of-the-art commercial project, we’re here to build it with precision and care.
Let us lay the foundation for your future—strong, reliable, and built to last.</p>

            <motion.div initial='hidden' whileInView="visible"className='flex justify-center items-center mb-7 md:mb-0 gap-5' >
              <motion.button variants={zoomInVariants} className='bg-yellow-500 hover:bg-white hover:text-black  md:px-10 px-7 md:py-3 py-3 rounded-lg text-black font-bold'> READ MORE</motion.button>
              <motion.button variants={zoomInVariants} className='border-white hover:border-yellow-500 hover:text-yellow-500 border-2 md:px-10 px-7 md:py-3 py-3 rounded-lg text-white font-bold'> REACH US</motion.button>
            </motion.div>
        </motion.div>

        <div className='w-[40%] flex flex-col justify-end items-end'>
          <motion.img  initial="hidden" whileInView="visible" variants={zoomInVariants} alt="hero" className='lg:h-[600px] h-[200px] lg:mb-[-100px]' src={heroimg}/>
        </div>


    </div>
  )
}

export default Hero