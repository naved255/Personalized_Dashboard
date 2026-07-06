import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CreateWork from './pages/CreateWork';
import Home from './pages/Home';
import Aside from './components/Aside';
import './index.css';
import Setting from './pages/Setting';
import { ThemeContext } from './CreateContext';
import { useContext } from 'react';
import News from './pages/News';

function App() {

 const {theme,settheme} = useContext(ThemeContext);

  return (
    <>


      <BrowserRouter>
        <div className={`grid grid-cols-4 box-border py-3  ${theme === 'light' ? 'bg-black' : 'bg-gray-950'} h-screen`}>
          <div className={`col-span-1  rounded-xl mx-2 outline  ${theme === 'dark' ? 'bg-black' : 'bg-white outline-gray-500'} h-full box-border`}>
            <Aside />
          </div>
          <div className={`col-span-3 h-full mx-2 overflow-y-auto rounded-xl outline  ${theme === 'dark' ? 'bg-black' : 'bg-white outline-gray-500'}  box-border`}>
            <Routes>
              <Route path='/create' element={<CreateWork />} />
              <Route path='/' element={<Home />} />
              <Route path='/news' element={<News />} />
              <Route path='/setting' element={<Setting />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
