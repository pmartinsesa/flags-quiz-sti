import React from "react";

import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import holanda from "./assets/flags/holanda.png";

import "./App.css";

function App() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setError(false);
  };

  return (
    <div className="App">
      <h1 style={{ marginLeft: "2rem" }}>
        Trabalho Final - Sistemas Tutores Inteligentes
      </h1>
      <div className="main-card">
        <div className="main-content">
          <div className="question-header">
            <h2 className="quiz-title">Qual a Bandeira?</h2>
            <h4 className="quiz-subtitle">Responda a questão abaixo:</h4>
          </div>

          <div className="question-structure">
            <img src={holanda} alt="flag-question" />
            <div className="question">
              <h4 className="question-title">Questão 1/3</h4>
              <span className="question-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in est id ligula tristique facilisis ac eget dui. Donec eu
                dapibus dolor. In mollis lectus odio, eu rutrum lacus
                pellentesque et. Suspendisse sit amet augue non sem varius
                convallis non non sem. Nam mauris urna, scelerisque eu dapibus
                id, dictum eu eros. Morbi sed vulputate sapien. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Ut egestas lacus ut dapibus ullamcorper. Nullam
                ac nunc nisi. Quisque elementum id dolor eu eleifend. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </span>
            </div>
          </div>

          <div className="answer-structure">
            <div>
              <h4 className="answer-title">Escolha uma opção</h4>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
                sx={{ fontFamily: "Poppins" }}
              >
                <FormControlLabel
                  value="holanda"
                  control={<Radio />}
                  label="Holanda"
                />
                <FormControlLabel
                  value="luxemburgo"
                  control={<Radio />}
                  label="Luxemburgo"
                />
                <FormControlLabel
                  value="espanha"
                  control={<Radio />}
                  label="Espanha"
                />
                <FormControlLabel
                  value="alemanha"
                  control={<Radio />}
                  label="Alemanha"
                />
              </RadioGroup>
            </div>
            <div className="tips">
              <h4 className="tips-title">Dicas</h4>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in est id ligula tristique facilisis ac eget dui. Donec eu
                dapibus dolor.
              </li>
              <li>
                In mollis lectus odio, eu rutrum lacus pellentesque et.
                Suspendisse sit amet augue non sem varius convallis non non sem.
                Nam mauris urna, scelerisque eu dapibus id, dictum eu eros.
              </li>
              <li>
                Morbi sed vulputate sapien. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Ut egestas
                lacus ut dapibus ullamcorper. Nullam ac nunc nisi.
              </li>
            </div>
          </div>
          <div className="submit-answer">
            <Button
              sx={{ borderRadius: "30px", fontFamily: "Poppins" }}
              type="submit"
              variant="contained"
              size="large"
            >
              Verificar Resposta
            </Button>
          </div>
        </div>
      </div>

      <footer>
        {" "}
        Feito com ❤️ por Pedro Flores, Pedro e Sá e Vinicius Pacheco.{" "}
      </footer>
    </div>
  );
}

export default App;
