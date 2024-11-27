import React from 'react'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants } from './animation'


const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div initial='hidden'   whileInView='visible' variants={slideUpVariants} className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'> WELCOME TO</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'> BIBI-NTI Contruction </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='md:text-3xl  italic text-gray-50 md:mt-[60px] text-justify'>"Building Excellence, Shaping the Future"
At BIBI-NTI Construction, we bring your dreams to life with precision and dedication. Our expertise ensures every project is crafted with unparalleled quality and attention to detail. Whether you’re envisioning a residential haven or a commercial masterpiece, we’re here to make it a reality.

Let us lay the foundation for your success—one brick at a time.</p>
      </motion.div>

      <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants} className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <p className='text-white text-lg text-justify'>At BIBI-NTI Construction, we are passionate about transforming visions into reality. With a steadfast commitment to excellence, innovation, and customer satisfaction, our team brings years of expertise to every project we undertake. Whether it’s crafting exquisite residential spaces or delivering cutting-edge commercial structures, we prioritize quality, reliability, and attention to detail.

          We believe in building not just structures, but long-lasting relationships with our clients by exceeding expectations every step of the way. From the initial consultation to project completion, your goals are our blueprint for success.</p>
        <motion.button variants={zoomInVariants} className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'> READ MORE</motion.button>
        
        </motion.div> 
    </div>
  )
}

export default About