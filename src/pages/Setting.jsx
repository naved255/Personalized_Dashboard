import React, { useEffect, useContext } from 'react'
import { ThemeContext, Completed, Work } from '../CreateContext'
import { motion } from 'framer-motion'

const Setting = () => {
  const { works, setwork } = useContext(Work)
  const { theme, settheme } = useContext(ThemeContext)
  const { completed, setcompleted } = useContext(Completed)

  useEffect(() => {
    if (localStorage.getItem('work')) {
      const data = JSON.parse(localStorage.getItem('work'))
      setwork(data)

      // ✅ also update completed context on load
      const completedTasks = data.filter((item) => item.isCompleted === true)
      setcompleted(completedTasks)
    }
  }, [])

  function handleChange(e) {
    settheme(e.target.value)
  }

  function handleDelete(id) {
    if (localStorage.getItem('work')) {
      const data = JSON.parse(localStorage.getItem('work'))
      const updated = data.filter((item) => id !== item.id)
      const updatedCompleted = updated.filter((item) => item.isCompleted === true)
      localStorage.setItem('work', JSON.stringify(updated))
      setwork(updated)
      setcompleted(updatedCompleted)
    }
  }

  return (
    <div
      className={`min-h-screen px-6 py-8 ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-black text-white'
        }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill={theme === 'dark' ? 'white' : 'black'}
        >
          <path d="M480-480ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-22-11-45-18.5T714-558l63-48-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 57 23.5 107T484-80H370Zm41-279q6-20 14.5-38.5T445-433q-11-8-17-20.5t-6-26.5q0-25 17.5-42.5T482-540q14 0 27 6.5t21 17.5q17-11 35-19.5t38-13.5q-18-32-50-51.5T482-620q-59 0-99.5 41T342-480q0 38 18.5 70.5T411-359Zm269 199 120-120-120-120-28 28 72 72H560v40h163l-71 72 28 28Zm0 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z" />
        </svg>
        <h1 className="text-4xl font-extrabold">Settings</h1>
      </div>

      {/* Theme Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">🎨 Theme</h2>
        <div className="flex gap-8 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={theme === 'light'}
              onChange={handleChange}
              value="light"
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-xl font-semibold ${theme === 'light'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700'
                }`}
            >
              Light
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={theme === 'dark'}
              onChange={handleChange}
              value="dark"
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-xl font-semibold ${theme === 'dark'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700'
                }`}
            >
              Dark
            </span>
          </label>
        </div>
      </div>

      {/* Completed Works */}
      <div>
        <h2 className="text-2xl font-bold underline mb-6">✅ Completed Works</h2>
        {completed.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {completed.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-white rounded-2xl shadow-md border border-gray-200 text-black"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.work}</h3>

                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-md font-medium">
                    ⏳ Deadline: {item.date}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-md font-medium ${item.completedAt.split(':')[0].slice(0, 10) > item.date
                        ? 'bg-red-100 text-red-600'
                        : 'bg-green-100 text-green-600'
                      }`}
                  >
                    ✅ Completed: {item.completedAt.split(':')[0].slice(0, 10)}
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg shadow-sm hover:bg-red-600 transition"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </motion.button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">No work completed yet 😴</p>
        )}
      </div>
    </div>
  )
}

export default Setting
