import React, { useContext } from 'react'
import { ThemeContext } from '../CreateContext'
import { motion } from 'framer-motion';

const NewsCards = ({content, description, image, title}) => {

    const {theme} = useContext(ThemeContext);

  return (
    <motion.div
    initial={{scale:0.9, opacity:0, y:40, x:40}}
    animate={{scale:1, opacity:1, y:0, x:0}}
    transition={{duration:0.7, ease:'easeOut'}}
    className={`w-[350px] px-0.5 py-2 shadow shadow-gray-700 rounded-2xl ${theme === 'light'?'bg-white':'bg-gray-800'}`}
    >
        <div className='w-full h-32 flex justify-center items-center text-center object-cover mt-8'><img className='rounded-md :object-cover h-full' src={`${image}`} alt="Image" /></div>
        <div className={`w-full px-1 py-2 ${theme === 'light'?'text-blue-900':'text-blue-100'} font-bold text-3xl flex justify-center items-center text-center`}><p>{title}</p></div>
        <div className={`w-full px-1 py-2 ${theme === 'light'?'text-gray-700':'text-gray-200'} font-extralight flex justify-center items-center text-center`}><p>{description}</p></div>
        <div className={`w-full px-3 py-2 justify-center items-center text-center mb-8 ${theme === 'light'?'text-black':'text-white'}`}><p>{content}</p></div>
    </motion.div>
  )
}

export default NewsCards