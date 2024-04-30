import React from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Home() {
  return (
    <main className="px-10">
      <div className="createNew">
        <Link to="/new" className="py-6 inline-flex flex-col items-center border-2 border-gray-500 p-2 rounded-md hover:bg-gray-900 hover:text-white"><AddCircleOutlineIcon /> <span className=" font-semibold">Add New Resume</span> </Link>
      </div>
    </main>
  );
}

export default Home;
