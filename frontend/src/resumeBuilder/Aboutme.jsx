import React from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Aboutme() {
  return (
    <>
    <div className='flex flex-col pl-4 pt-6 gap-[2rem]'>

    <div className="form-group flex gap-[2rem]">
      <label className='font-medium text-xl' htmlFor="aboutme">About Me</label>
      <textarea className='border-gray-400 border-2 rounded px-3'
        name="aboutme"
        id="aboutme"
        cols="35"
        rows="8"
        placeholder="Write summary about you"
      ></textarea>
    </div>

    <div className="form-group flex gap-[3rem] ">
      <label className='font-medium text-xl' htmlFor="aboutmepointers">Pointers</label>
      <div className='flex gap-3'>

      <input className='border-gray-400 border-2 rounded px-3 py-1 w-[19rem]'
        type="text"
        name="aboutmepointers"
        id="aboutmepointers"
        placeholder="Write bullet points about you"
      />
      <button>
        <AddCircleOutlineIcon />
      </button>
      </div>

    </div>
    </div>

  {/* // </div> */}
    </>
  )
}

export default Aboutme