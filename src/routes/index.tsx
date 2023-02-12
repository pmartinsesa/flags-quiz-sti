import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import { FirstQuestion } from "../pages/FirstQuestion";

export const AplicationRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('first-question');
  }, [])

  return (
    <Routes>
      <Route path="/first-question" element={<FirstQuestion />} />
    </Routes>
  );
};
