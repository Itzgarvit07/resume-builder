import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Link } from "react-router-dom";

function ResumeSelection() {
  const urlArray = ['my-details','about-me','skills-prof','work-exp'];
  const [counter,setCounter] = useState(0)
  const [nextPage,setNextPage] = useState(urlArray[counter])

  const handleClickNext = () => {
    setCounter(counter + 1)
  };
  useEffect(() =>{
    setNextPage(urlArray[counter])
  },[counter])
  return (
    <div className="w-3/5">
      <div className="flex justify-end items-center pl-3 pr-5 py-3 gap-3">
        {/* <button
          onClick={handleClickNext}
          className="bg-gray-300 text-sm text-gray-400 px-2 py-1 rounded-lg"
        >
          <span className="text-black font-semibold">Next</span>
          <EastOutlinedIcon />
        </button> */}
        <Link onClick={handleClickNext} 
        to={nextPage}
         className="bg-gray-300 text-sm text-gray-400 px-2 py-1 rounded-lg">
          <span className="text-black font-semibold">Next</span>
          <EastOutlinedIcon/>
        </Link>
        
      </div>
      <Outlet />
    </div>
  );
}

export default ResumeSelection;
