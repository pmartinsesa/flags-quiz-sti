import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import { Expert } from "../modules/Expert";
import { Student } from "../modules/Student";
import { Tutorial } from "../modules/Tutorial";

import { FirstQuestion } from "../pages/FirstQuestion";
import { SecondQuestion } from "../pages/SecondQuestion";
import { ThirdQuestion } from "../pages/ThirdQuestion";
import { ForthQuestion } from "../pages/ForthQuestion";
import { FifthQuestion } from "../pages/FifthQuestion";
import { SixthQuestion } from "../pages/SixthQuestion";
import { SeventhQuestion } from "../pages/SeventhQuestion";
import { EighthQuestion } from "../pages/EighthQuestion";
import { NinthQuestion } from "../pages/NinthQuestion";
import { TenthQuestion } from "../pages/TenthQuestion";
import { EasyQuestion } from "../pages/EasyQuestion";

export type ApplicationRoutesProps = {
  expertModule: Expert;
  studentModule: Student;
  tutorialModule: Tutorial;
}

export const AplicationRoutes = ({ expertModule, studentModule, tutorialModule }: ApplicationRoutesProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("first-question");
  }, []);

  return (
    <Routes>
      <Route
        path="/first-question"
        element={<FirstQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/second-question"
        element={<SecondQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/third-question"
        element={<ThirdQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/forth-question"
        element={<ForthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/fifth-question"
        element={<FifthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/sixth-question"
        element={<SixthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/seventh-question"
        element={<SeventhQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/eighth-question"
        element={<EighthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/ninth-question"
        element={<NinthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/tenth-question"
        element={<TenthQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
      <Route
        path="/easy-question"
        element={<EasyQuestion expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />}
      />
    </Routes>
  );
};
