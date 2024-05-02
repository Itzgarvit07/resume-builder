import Home from "./Home";
import Header from "./Header";
import "./resumeBuilder.css";
import ResumeWrapper from "./ResumeWrapper";
import NewResume from "./NewResume";
import Mydetails from "./Mydetails";
import Aboutme from "./Aboutme";
import SkillsAndProf from "./SkillsAndProf";
import WorkExp from "./WorkExp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext,useEffect,useState,useContext } from "react";
export const inputField = createContext()
function Main() {
const [name,setName] = useState("")
const [role,setRole] = useState("")

const [totalExp,setTotalExp] = useState("")
const [message,setMessage] = useState("")
const [image,setImage] = useState("")

const [input,setInput] = useState([""]);

const [formData, setFormData] = useState({
  clientDescription: "",
  country: "",
  projectName: "",
  roleWork: "",
  startDate: "",
  endDate: "",
  businessSolution: "",
  technologyStack: "",
  projectResponsibility: "",
});  


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header /> <Home />
        </>
      ),
    },
    {
      path: "/new",
      element: <ResumeWrapper />,
      children: [
        { path: "", element: <NewResume /> },
        { path: "my-details", element: <Mydetails /> },
        { path: "about-me", element: <Aboutme /> },
        { path: "skills-prof", element: <SkillsAndProf /> },
        { path: "work-exp", element: <WorkExp /> },
      ],
    },
    {
      path: "*",
      element: "page not found",
    },
  ]);

  return (
    <>
    <inputField.Provider value={{name,setName,role,setRole,totalExp,setTotalExp,message,setMessage,image,setImage,formData,setFormData,input,setInput}}>
      <RouterProvider router={router} />
      </inputField.Provider>
    </>
  );
}

export default Main;
