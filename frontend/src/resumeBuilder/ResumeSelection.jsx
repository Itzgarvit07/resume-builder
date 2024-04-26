import React from 'react'
import { Outlet } from 'react-router-dom'

function ResumeSelection() {
  return (
    <div className='w-3/5'>
        <Outlet/>
    </div>
  )
}

export default ResumeSelection