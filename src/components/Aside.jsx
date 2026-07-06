import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../CreateContext'
import { useContext } from 'react'

const Aside = () => {

  const {theme, settheme} = useContext(ThemeContext);
  
  return ( <>
    
    <div className={`flex  h-full flex-col gap-4 items-center font-bold text-2xl rounded-xl p-3  ${theme === 'light' ? 'text-black' : 'text-white'} ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "3.5rem", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full shadow rounded-t-2xl   ${theme === 'dark' ? 'bg-gray-900' : 'bg-black shadow-gray-700'}`}
        ></motion.div>
        <NavLink className={`w-full flex gap-1.5 items-center  hover:shadow ${theme === 'dark' ? 'shadow-white' : 'shadow-gray-700'} rounded-md my-2 p-2`} to={'/'}>
        <div><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill={`${theme === 'dark' ? 'white' : 'black'}`}><path d="M480-427ZM240-120q-50 0-85-35t-35-85v-240q0-24 9-46t26-39l240-240q17-18 39.5-26.5T480-840q23 0 45 8.5t40 26.5l240 240q17 17 26 39t9 46v240q0 50-35 85t-85 35H240Zm0-80h480q17 0 28.5-11.5T760-240v-240q0-8-3-15t-9-13L595-662l-59 58 144 144v180H280v-180l258-258-30-30q-8-8-15.5-10t-12.5-2q-5 0-12.5 2T452-748L212-508q-6 6-9 13t-3 15v240q0 17 11.5 28.5T240-200Zm120-160h240v-67L480-547 360-427v67Z"/></svg></div> Home</NavLink>
        <NavLink className={`w-full flex gap-1.5 items-center  hover:shadow ${theme === 'dark' ? 'shadow-white' : 'shadow-gray-700'} rounded-md my-2 p-2`} to={'/create'}>
        <div><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill={`${theme === 'dark' ? 'white' : 'black'}`}><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z"/></svg></div>
        Add work</NavLink>
        <NavLink className={`w-full flex gap-1.5 items-center  hover:shadow ${theme === 'dark' ? 'shadow-white' : 'shadow-gray-700'} rounded-md my-2 p-2`} to={'/news'}>
        <div><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill={`${theme === 'dark' ? 'white' : 'black'}`}><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm80-80h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80ZM160-200v-560 560Z"/></svg></div>News</NavLink>
        <NavLink className={`w-full flex gap-1.5 items-center  hover:shadow ${theme === 'dark' ? 'shadow-white' : 'shadow-gray-700'} rounded-md my-2 p-2`} to={'/setting'}><div><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill={`${theme === 'dark' ? 'white' : 'black'}`} ><path d="M480-480ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-22-11-45-18.5T714-558l63-48-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 57 23.5 107T484-80H370Zm41-279q6-20 14.5-38.5T445-433q-11-8-17-20.5t-6-26.5q0-25 17.5-42.5T482-540q14 0 27 6.5t21 17.5q17-11 35-19.5t38-13.5q-18-32-50-51.5T482-620q-59 0-99.5 41T342-480q0 38 18.5 70.5T411-359Zm269 199 120-120-120-120-28 28 72 72H560v40h163l-71 72 28 28Zm0 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z"/></svg></div>Setting</NavLink>
      <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "3.5rem", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
         className={`w-full shadow  rounded-b-2xl   ${theme === 'dark' ? 'bg-gray-900' : 'bg-black shadow-gray-700'}`}
        ></motion.div>
    </div>
    </>
  )
}

export default Aside