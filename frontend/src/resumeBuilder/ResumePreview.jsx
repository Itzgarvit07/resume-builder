import React from 'react'
import PersonIcon from "@mui/icons-material/Person";



function ResumePreview() {
  return (
    <>
    <main className='w-1/2 border-l-2 border-gray-500 pl-4 '>
    <div className='flex justify-end p-4'>
<img src="../Header-logo.png" className='h-[90px] w-[90px] mr-5' alt="" />
    </div>
    <div className='flex items-center justify-start gap-[3rem] ml-6'>
    <div className='h-[120px] w-[120px] flex justify-center items-center rounded-full bg-gray-300 inline-block'>
      <img src="" alt="" />
      <span className='text-gray-500'><PersonIcon sx={{fontSize:"4rem"}}/></span>
    </div>
    <div>
    <h1 className='text-[2rem] font-semibold'>Garvit</h1>
<p>Role</p>
<p>Total exp:</p>
    </div>
    </div>
<div className='flex justify-start mt-10 gap-[3.5rem]'>
  <div className=''>
    <h1 className='text-[17px] font-bold mb-1'>ABOUT ME</h1>
    <div className='bg-blue-200 w-[225px] h-[2px]'>
      <div className='bg-blue-600 w-[50px] h-[2px]'></div>
    </div>
  </div>
  <div className=''>
    <h1 className='text-[17px] font-bold mb-1'>WORK HISTORY</h1>
    <div className='bg-blue-200 w-[225px] h-[2px]'>
      <div className='bg-blue-600 w-[50px] h-[2px]'></div>
    </div>
  </div>
</div>
<div className='h-[150px]'></div>
<div className=''>
    <h1 className='text-[17px] font-bold mb-1'>SKILLS & PROFICIENCIES</h1>
    <div className='bg-blue-200 w-[225px] h-[2px]'>
      <div className='bg-blue-600 w-[50px] h-[2px]'></div>
    </div>
</div>
<div className='h-[80px]'></div>
<div className='flex justify-start gap-[3.5rem]'>
<div className=''>
    <h1 className='text-[17px] font-bold mb-1'>CERTIFICATION & WORK</h1>
    <div className='bg-blue-200 w-[225px] h-[3px]'>
      <div className='bg-blue-600 w-[50px] h-[3px]'></div>
    </div>
</div>
<div className=''>
    <h1 className='text-[17px] font-bold mb-1'>EDUCATIONAL BACKGROUND</h1>
    <div className='bg-blue-200 w-[225px] h-[3px]'>
      <div className='bg-blue-600 w-[50px] h-[3px]'></div>
    </div>
</div>
</div>

    </main>
    </>
  )
}

export default ResumePreview