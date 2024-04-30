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

function Main() {
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
      <RouterProvider router={router} />
    </>
  );
}

export default Main;
