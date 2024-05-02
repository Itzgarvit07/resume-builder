import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { inputField } from "./Main";

function Mydetails() {

  const {name,setName,role,setRole,totalExp,setTotalExp,image,setImage} = useContext(inputField)

  // const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="bg-gray-200 h-[200px] w-[200px] flex justify-center items-center rounded-full">
          <form
            action=""
            className="flex justify-center items-center cursor-pointer h-[200px] w-[200px] bg-gray-300 rounded-full"
            onClick={() => document.querySelector("#mango").click()}
          >
            <input
              type="file"
              hidden
              accept="image/*"
              name=""
              id="mango"
              className="cursor-pointer"
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />
            {image ? (
              <img
                className="h-[200px] w-[200px] rounded-full"
                src={image}
                alt=""
              />
            ) : (
              <span className="text-gray-500">
                <PersonIcon sx={{ fontSize: "5rem" }} />
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-5 flex flex-col gap-[2rem]">
          <div className="flex gap-[4rem]">
            <label htmlFor="">Name</label>
            <input
           
              type="text"
              name=""
              id=""
              className="border-[2px] border-solid border-gray-300 outline-none"
              value={name}
              onChange={(e)=>{
setName(e.target.value)
              }}
            />
          </div>
          <div className="flex gap-[4.7rem]">
            <label htmlFor="">Role</label>

            <input
              type="text"
              placeholder="Add Role"
             
              name=""
              id=""
              className="border-[2px] border-solid border-gray-300 outline-none w-[6rem] rounded-2xl text-[14px] p-1 pl-2"
              value={role}
              onChange={(e)=>{
setRole(e.target.value)
              }}
            />
          </div>
          <div className="flex gap-[2.5rem]">
            <label htmlFor="">Total Exp:</label>
            <input
           
              type="text"
              name=""
              id=""
              className="border-[2px] border-solid border-gray-300 outline-none w-[6rem] rounded-lg"
              value={totalExp}
              onChange={(e)=>{
setTotalExp(e.target.value)
              }}
            />
            <label htmlFor="" className="text-gray-400">
              Years
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mydetails;
