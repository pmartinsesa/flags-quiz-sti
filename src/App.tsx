import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { AplicationRoutes } from "./routes";

import { Expert } from "./modules/Expert";
import { Student } from "./modules/Student";
import { Tutorial } from "./modules/Tutorial";

import "./App.css";


const expertModule = new Expert();
const studentModule = new Student();
const tutorialModule = new Tutorial()

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: "2rem" }}>
        Trabalho Final - Sistemas Tutores Inteligentes
      </h1>
      <div className="main-card">
        <div className="main-content">
          <div className="quiz-header">
            <h2 className="quiz-title">Qual a Bandeira?</h2>
            <h4 className="quiz-subtitle">Descubra a bandeira abaixo:</h4>
          </div>
          <Router>
            <AplicationRoutes expertModule={expertModule} studentModule={studentModule} tutorialModule={tutorialModule} />
          </Router>
        </div>
      </div>

      <footer>
        Feito com ❤️ por Pedro Flores, Pedro e Sá e Vinicius Pacheco.
      </footer>
    </div>
  );
}

export default App;
