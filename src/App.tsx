import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { AplicationRoutes } from "./routes";

import "./App.css";

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
            <AplicationRoutes />
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
