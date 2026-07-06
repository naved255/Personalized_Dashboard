import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { ThemeContext } from '../CreateContext';
import { useContext } from 'react';

const CreateWork = () => {
  const name = useRef(null)
  const description = useRef(null)
  const date = useRef(null)
  const navigate = useNavigate();

  const {theme} = useContext(ThemeContext);

  function handleClick() {
    let data = [];

    let workObj = {
      id: uuidv4(),
      work: name.current.value,
      description: description.current.value,
      date: date.current.value,
      isCompleted:false,
      completedAt: null,
    }

    if (localStorage.getItem('work')) {
      data = JSON.parse(localStorage.getItem('work'));
      data.push(workObj);
      localStorage.setItem('work', JSON.stringify(data));
    } else {
      data.push(workObj);
      localStorage.setItem('work', JSON.stringify(data));
    }
    navigate('/');
  }

  // animation variants for stagger effect
  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      <div className="w-full py-6 px-4 text-center">
        <p className={`font-[Montserrat] text-3xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          ✨ Add Your Work
        </p>
        <p className="text-gray-600 mt-1">Plan, track and complete your tasks</p>
      </div>

      <div className="w-full h-[80vh] flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.9, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[420px] py-8 px-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl flex flex-col gap-6 justify-center items-center border border-gray-200"
        >
          {/* Input: Work */}
          <motion.input
            custom={0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            ref={name}
            type="text"
            placeholder="📝 Work title"
            className="w-full px-3 py-3 rounded-md text-lg bg-gray-100 border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />

          {/* Input: Description */}
          <motion.textarea
            custom={1}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            ref={description}
            placeholder="📌 Description..."
            rows="3"
            className="w-full px-3 py-3 rounded-md text-lg bg-gray-100 border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
          />

          {/* Input: Date */}
          <motion.div
            custom={2}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <label className="text-gray-700 font-medium text-sm mb-1 block">
              ⏳ Deadline
            </label>
            <input
              ref={date}
              type="date"
              className="w-full px-3 py-3 rounded-md text-lg bg-gray-100 border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            custom={3}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 
                       text-white font-bold text-lg shadow-md hover:shadow-lg transition"
          >
            🚀 Create Work
          </motion.button>
        </motion.div>
      </div>
    </>
  )
}

export default CreateWork
