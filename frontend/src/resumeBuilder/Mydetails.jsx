import React,{useState} from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


function Mydetails() {

  const [image,setImage] = useState(null)
  const [fileName,setFileName] = useState("No selected file")


  return (
    <>
    

    <div className='flex justify-center mt-5'>
    <div className='bg-gray-200 h-[200px] w-[200px] flex justify-center items-center rounded-full'>
      {/* <span className='text-gray-500'><PersonIcon sx={{fontSize:'5rem'}} /></span> */}
      <form action="" className='flex justify-center items-center cursor-pointer h-[200px] w-[200px] bg-gray-300 rounded-full' onClick={() => document.querySelector("#mango").click()}>
<input type="file" hidden accept='image/*' name="" id="mango" className='cursor-pointer' onChange={({target:{files}}) => {
  files[0] && setFileName(files[0].name)
  if(files){
    setImage(URL.createObjectURL(files[0]))
  }
}} />
{image ?
<img className='h-[200px] w-[200px] rounded-full' src={image} alt="" /> 
: <span className='text-gray-500'><PersonIcon sx={{fontSize:'5rem'}} /></span>
}

</form>
    </div>
    </div>
    <div className='flex justify-center'>
      <div className='mt-5 flex flex-col gap-[2rem]'>
        <div className='flex gap-[4rem]'>
      <label htmlFor="">Name</label>
      <input type="text" name="" id="" className='border-[2px] border-solid border-gray-300 outline-none' />
      </div>
      <div className='flex gap-[4.7rem]'>
      <label htmlFor="">Role</label>
  
      <input type="text" placeholder='Add Role' name="" id="" className='border-[2px] border-solid border-gray-300 outline-none w-[6rem] rounded-2xl text-[14px] p-1 pl-2' />
    </div>
    <div className='flex gap-[2.5rem]'>
      <label htmlFor="">Total Exp:</label>
      <input type="text" name="" id="" className='border-[2px] border-solid border-gray-300 outline-none w-[6rem] rounded-lg' />
      <label htmlFor="" className='text-gray-400'>Years</label>
    </div>  
    </div>
    </div>
    </>
  )
}

export default Mydetails