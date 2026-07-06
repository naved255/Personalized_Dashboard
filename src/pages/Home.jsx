import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Completed, ThemeContext } from '../CreateContext';
import { Work } from '../CreateContext';
import Performance from '../components/Performance';


const Home = () => {

  const { works, setwork } = useContext(Work);


  const { theme, settheme } = useContext(ThemeContext);

  const { completed, setcompleted } = useContext(Completed);

  useEffect(() => {
    if (localStorage.getItem('work')) {
      const data = JSON.parse(localStorage.getItem('work'));
      setwork(data);
    }
  }, []);



  function handleComplete(id) {
    if (localStorage.getItem('work')) {
      const data = JSON.parse(localStorage.getItem('work'));
      const updated = data.map((item) =>
        item.id === id ? { ...item, isCompleted: true, completedAt: new Date().toISOString() } : item
      );

      // update completed context properly
      const completedTasks = updated.filter((item) => item.isCompleted === true);
      setcompleted(completedTasks);

      localStorage.setItem('work', JSON.stringify(updated));
      setwork(updated);
    }
  }


  // Animation for container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, y: 30 },
  };

  return (
    <div className={`px-4 py-6 ${theme === 'light' ? 'text-black' : 'text-white'} ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>

      {/* Hero Section */}
      <div className="w-full text-center mb-10">
        <p className={`font-[Montserrat] text-4xl md:text-5xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          🚀 Organize Your Work, Beat Your Deadlines
        </p>
        <p className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} mt-3 text-lg`}>
          Stay productive and track all your tasks in one place
        </p>
        <div className="mt-6">
          <NavLink
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xl font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition"
            to={'/create'}
          >
            + Create Work
          </NavLink>
        </div>
      </div>

      <Performance/>

      {/* Section title */}
      <div>
        <p className={`my-6 px-4 py-2 text-2xl font-bold w-fit ${theme === 'dark' ? 'bg-gray-900' : 'bg-black'} text-white rounded-lg`}>
          📌 Your Tasks
        </p>
      </div>

      {/* Task Cards */}
      <motion.div
        className="flex gap-7 justify-center items-start flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {works.length > 0 ? (
            works.map((item) => (
              item.isCompleted === false ? (
                <motion.div
                  variants={cardVariants}
                  exit="exit"
                  key={item.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="w-96 py-6 h-auto rounded-2xl shadow-lg bg-white p-5 flex flex-col gap-4 border border-gray-200"
                >
                  {/* Title */}
                  <p className="text-2xl  font-[Inter] break-words whitespace-normal font-bold text-blue-900 tracking-tight">
                    {item.work}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 break-words whitespace-normal text-base leading-relaxed">{item.description}</p>

                  {/* Deadline */}
                  <p className="text-sm">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-md font-medium">
                      ⏳ Deadline: {item.date}
                    </span>
                  </p>

                  {/* Buttons */}
                  <div className="w-full mt-4 flex justify-between gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 cursor-pointer text-white bg-red-500 hover:bg-red-600 transition rounded-lg font-semibold h-11 shadow-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 cursor-pointer text-white bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold h-11 shadow-sm"
                      onClick={() => handleComplete(item.id)}
                    >
                      Completed
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  variants={cardVariants}
                  exit="exit"
                  key={item.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-96 py-8 px-6 rounded-2xl shadow-lg bg-green-50 text-black flex flex-col justify-center items-center gap-4 border border-green-200"
                >
                  {/* Check Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Title */}
                  <p className="text-2xl font-bold text-green-700">
                    🎉 Work Completed!
                  </p>

                  {/* Subtitle */}
                  <p className="text-green-600 text-center text-sm">
                    Great job finishing this task. Keep it up!
                  </p>
                </motion.div>

              )

            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-500 mt-20"
            >
              <p className="text-2xl font-semibold">No tasks yet 😴</p>
              <p className="mt-2">Click on "Create Work" to add your first task!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Home;
