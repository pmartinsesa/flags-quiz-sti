import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { Expert } from "../modules/Expert";

import { FirstQuestion } from "../pages/FirstQuestion";
import { SecondQuestion } from "../pages/SecondQuestion";
import { ThirdQuestion } from "../pages/ThirdQuestion";
import { ForthQuestion } from "../pages/ForthQuestion";
import { FifthQuestion } from "../pages/FifthQuestion";
import { SixthQuestion } from "../pages/SixthQuestion";
import { SeventhQuestion } from "../pages/SeventhQuestion";

export const AplicationRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("first-question");
  }, []);

  const expertModule = new Expert();

  return (
    <Routes>
      <Route
        path="/first-question"
        element={<FirstQuestion expertModule={expertModule} />}
      />
      <Route
        path="/second-question"
        element={<SecondQuestion expertModule={expertModule} />}
      />
      <Route
        path="/third-question"
        element={<ThirdQuestion expertModule={expertModule} />}
      />
      <Route
        path="/forth-question"
        element={<ForthQuestion expertModule={expertModule} />}
      />
      <Route
        path="/fifth-question"
        element={<FifthQuestion expertModule={expertModule} />}
      />
      <Route
        path="/sixth-question"
        element={<SixthQuestion expertModule={expertModule} />}
      />
      <Route
        path="/seventh-question"
        element={<SeventhQuestion expertModule={expertModule} />}
      />
    </Routes>
  );
};
