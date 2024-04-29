import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import "./resumeBuilder.css";
import ResumeWrapper from "./ResumeWrapper";
import NewResume from "./NewResume";
import Mydetails from "./Mydetails";
import Aboutme from "./Aboutme";
import SkillsAndProf from "./SkillsAndProf";
import WorkExp from "./WorkExp";
import ResumeSelection from "./ResumeSelection";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header /> <Home />
            </>
          }
          path="/"
        />
        <Route element={<ResumeWrapper/>} path="/new" >
          <Route index element={<NewResume/> }/>
          <Route element={<Mydetails/>} path="my-details"/>
          <Route element={<Aboutme/>} path="about-me" />
          <Route element={<SkillsAndProf/>} path="skills-prof"/>
          <Route element={<WorkExp/>} path="work-exp" />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
