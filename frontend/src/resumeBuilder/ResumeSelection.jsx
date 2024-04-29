import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function ResumeSelection() {
  const navigate = useNavigate();
const handleNextButton = () => {
navigate('')
}
  return (
    <div className='w-3/5'>
          <div className='flex justify-end items-center pl-3 pr-5 py-3 gap-3'>
<button onClick={handleNextButton} className='bg-gray-300 text-sm text-gray-400 px-2 py-1 rounded-lg'><span className='text-black font-semibold'>Next</span><EastOutlinedIcon/></button>
    </div>
        <Outlet/>
    </div>
  )
}

export default ResumeSelection