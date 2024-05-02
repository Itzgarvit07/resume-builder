import React, { useContext } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import { inputField } from './Main';
function WorkExp() {
const {formdata,setFormData} = useContext(inputField)
  return (
    <div className='mx-4'>
    <h3 className='mt-[1rem]'>Work Experience <InfoIcon/> </h3>
    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Client Description</label>
      <input value={formdata?.clientDescription} onChange={(e) => setFormData((pre) => ({...pre,clientDescription:e.target.value}))} type="text" className='border-2 border-black h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[7.2rem] items-center mt-[1rem]'>
      <label>Country</label>
      <input type="text" value={formdata?.country} onChange={(e) => setFormData((pre) => ({...pre,country:e.target.value}))} className='border-2 border-black h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[4.8rem] items-center mt-[1rem]'>
      <label>Project Name</label>
      <input type="text" value={formdata?.projectName} onChange={(e) => setFormData((pre) => ({...pre,projectName:e.target.value}))} className='border-2 border-black h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[9rem] items-center mt-[1rem]'>
      <label>Role</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="text" value={formdata?.roleWork} onChange={(e) => setFormData((pre) => ({...pre,roleWork:e.target.value}))}  className='border-2 border-black h-[2.5rem] w-[8rem] rounded-full' />
      
      </div> 
    </div>

    <div className='flex justify-left gap-[7rem] items-center mt-[1rem]'>
      <label>Duration</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="date" value={formdata?.startDate} onChange={(e) => setFormData((pre) => ({...pre,startDate:e.target.value}))} className='border-2 border-black h-[2.5rem] w-[9rem]' />
      <input type="date" value={formdata?.endDate} onChange={(e) => setFormData((pre) => ({...pre,endDate:e.target.value}))} className='border-2 border-black h-[2.5rem] w-[9rem]' />
      </div>
    </div>

    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Business Solution</label>
<textarea value={formdata?.businessSolution} onChange={(e) => setFormData((pre) => ({...pre,businessSolution:e.target.value}))} className='border-black border-[2px] ' name="" id="" cols="53" rows="4"/>    </div>

    <div className='flex justify-left gap-[3.6rem] items-center mt-[1rem]'>
      <label>Technology Stack</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="text" className='border-2 border-black h-[2.5rem] w-[6rem] rounded-full' />
      <input type="text" className='border-2 border-black h-[2.5rem] w-[6rem] rounded-full' />
      <div className='h-[2rem] w-[2rem] border-2 border-black rounded-full text-center'>+</div>
      </div> 
    </div>

    <div className='flex justify-left gap-[1.5rem] items-center mt-[1rem]'>
      <label>Project Responsibility</label>
<textarea value={formdata?.projectResponsibility} onChange={(e) => setFormData((pre) => ({...pre,projectResponsibility:e.target.value}))} className='border-black border-[2px] ' name="" id="" cols="53" rows="3"/>
      
    </div>

    <hr className='mt-[1rem]'/>
 <div className=' w-[15rem] border-2 border-black rounded-full px-2 py-2 mt-2 text-center'><AddIcon/> Add work Experience</div>
   </div>
  )
}

export default WorkExp