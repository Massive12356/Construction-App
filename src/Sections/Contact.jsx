import React from 'react'
import { motion } from 'framer-motion'
import {slideUpVariants, zoomInVariants } from './animation'


const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
        <motion.div initial='hidden'   whileInView='visible' variants={slideUpVariants} className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'> CONTACT US</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase md:text-[40px] text-[32px] font-bold'> REACH US FOR ANY QUERY</motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='md:text-3xl italic text-gray-600 mt-[60px]'>Have questions or need assistance with your project? We’re here to help! Get in touch with us today and let’s discuss how we can bring your vision to life.</p>
       </motion.div>

       <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants} className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>

        <motion.form initial='hidden'whileInView='visible' variants={zoomInVariants} className='flex flex-col justify-center items-center gap-4 w-full' >
          <input type="text" placeholder='Enter Full Name'  className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'/>
          <input type="email" placeholder='Enter Email '  className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'/>
          <input type="number" placeholder='Enter mobile number'  className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'/>
          <textarea name="" id="" placeholder='Enter your Message' rows='4' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full resize-none'></textarea>
          <motion.button variants={zoomInVariants} className='bg-yellow-500 hover:bg-black hover:text-white md:px-10 px-8 md:py-4 py-4 text-black font-bold rounded-lg w-full'>SUBMIT</motion.button>
        </motion.form>

        </motion.div> 
      </div>
    </div>
  )
}

export default Contact