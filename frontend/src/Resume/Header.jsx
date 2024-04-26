import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Header() {
  return (
    <>
      <div className="mx-[6rem]">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center gap-[2rem]">
            <div className=" ">
              <h1 className="text-[2rem] font-bold">LOGO</h1>
            </div>

            <div className="text-left">
              <h3>Resume</h3>
              <p>Managemnet System</p>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search"
              className=" border-solid border-gray-400 border-2 rounded-lg px-2 py-1 "
            />
          </div>
        </div>

        <div className="border-[1.5px] border-solid border-lime-600 inline-block px-3 py-2 rounded-xl mt-5">
          <h1 className="text-center">
            <AddCircleOutlineIcon />
          </h1>
          <h1>Create New</h1>
        </div>
      </div>
    </>
  );
}

export default Header;