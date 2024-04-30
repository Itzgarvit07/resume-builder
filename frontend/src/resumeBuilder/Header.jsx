import { Link } from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header() {
  return (
    <>
    <header className="flex justify-between  px-10 h-[7rem] items-center shadow-sm mb-4">
    <div className="text-left flex items-center justify-center">
      <div>
      <h1 className="mr-3 text-lg font-semibold"><Link to="/"><img className="h-[90px] w-90px] object-cover mx-8" src="./Header-logo.png" alt="" /></Link></h1>
      </div>  
      <div className="text-[17px] font-normal ml-5">
              <h3>Resume</h3>
              <p>Management System</p>
              </div>
               </div>

               <div className="bg-gray-100 border-solid border-gray-100 border-2 rounded-3xl pl-3 pr-2 py-1 shadow-xl">
               <input type="text"
          placeholder="Search"
          className="bg-gray-100 border-none outline-none" 
          />
<span className="text-gray-400"><SearchRoundedIcon/></span>
               </div>
         
       
      <ul className="flex items-center">
        
        <li className="">
          Welcome <strong>User</strong>
        </li>
      </ul>
    </header>
    </>
  );
}

export default Header;
