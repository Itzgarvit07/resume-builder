import React,{useContext,useState} from 'react'
import PersonIcon from "@mui/icons-material/Person";
import { inputField } from './Main';



function ResumePreview() {
  const {name,setName,role,setRole,totalExp,setTotalExp,message,setMessage,image,setImage,formData,setFormData,input,setInput} = useContext(inputField)
// console.log(image,1234)
  return (
    <>
    <main className='w-1/2 border-l-2 border-gray-500 pl-4'>
    <div className='flex justify-end p-4'>
<img src="../Header-logo.png" className='h-[90px] w-[90px] mr-5' alt="" />
    </div>
    <div className='flex items-center justify-start gap-[3rem] ml-6'>
    <div className='h-[120px] w-[120px] flex justify-center items-center rounded-full bg-gray-300'>
      {image ? (<img src={image} className='h-[120px] w-[120px] rounded-full'  alt=""  />) : ( <span className="text-gray-500">
                <PersonIcon sx={{ fontSize: "4rem" }} />
              </span> )
}
        
      
      {/* <span className='text-gray-500'><PersonIcon sx={{fontSize:"4rem"}}/></span> */}
    </div>
    <div>
    <h1 className='font-semibold'>Name: {name}</h1>
<p>Role: {role}</p>
<p>Total exp: {totalExp}</p>
    </div>
    </div>
<div className='flex justify-start mt-10 gap-[3.5rem]'>
  <div className=''>
    <h1 className='text-[17px] font-bold mb-1'>ABOUT ME</h1>
    <div className='bg-blue-200 w-[225px] h-[2px]'>
      <div className='bg-blue-600 w-[50px] h-[2px]'></div>
    </div>
    <div className='w-[220px]'>{message}</div>
    <ul className='flex flex-col list-disc ml-3'>{input.map((item,index) => {
      if(item !== "") {
        return(
          <li>{item}</li>
                )
              }

              })}

      
    </ul>
  </div>
  <div className=''>
    <h1 className='text-[17px] font-bold mb-1'>WORK HISTORY</h1>
    <div className='bg-blue-200 w-[225px] h-[2px]'>
      <div className='bg-blue-600 w-[50px] h-[2px]'></div>
    </div>
    <div>
      {
        formData?.clientDescription && (
          <p><span>Client:</span>{formData.clientDescription}</p>
        )}
        {formData?.country && ( 
                <p> <span>Country: </span>{formData.country}</p>
              )}
             
             {
              formData?.projectName && (
                <p> <span>Project Name: </span>{formData?.projectName}</p>
              )
             }
            {
              formData.roleWork && (
                <p><span>roleWork</span>{formData?.roleWork}</p> 
              )
            }
          {
            formData.startDate  &&  <p> <span>startDate</span>
            {formData?.startDate} 
          </p>
          }
          {
             formData.endDate  &&  <p> <span>endDate</span>
             {formData?.endDate} 
           </p>
          }
              {
                formData.businessSolution &&   <p><span>Business Solution</span>{formData?.businessSolution}</p>
              }
        
              {
                formData.projectResponsibility &&
                <p><span>Project Responsibility</span>{formData?.projectResponsibility}</p>
              }
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