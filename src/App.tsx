import { QuestionField } from "./components/Question/QuestionField";
import { AnswerField } from "./components/Answer/AnswerField";

import holanda from "./assets/flags/holanda.png";
import { QuestionType } from "./types";

import "./App.css";

const QUESTIONS: Array<QuestionType> = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est id ligula tristique facilisis ac eget dui. Donec eu dapibus dolor. In mollis lectus odio, eu rutrum lacus pellentesque et. Suspendisse sit amet augue non sem varius convallis non non sem. Nam mauris urna, scelerisque eu dapibus id, dictum eu eros. Morbi sed vulputate sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut egestas lacus ut dapibus ullamcorper. Nullam ac nunc nisi. Quisque elementum id dolor eu eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    flag: holanda,
    number: 1,
    options: ["Espanha", "França", "Italia", "Holanda", "Luxemburgo"],
    correctAnswer: "Holanda",
    tips: [
      "É um país da europa.",
      "No passado invadiu o Brasil.",
      "Terra das flores e dos moinhos de vento.",
      "Seu idioma é o holandes.",
    ],
  },
];

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

          <QuestionField
            description={QUESTIONS[0].description}
            flag={QUESTIONS[0].flag}
            number={QUESTIONS[0].number}
          />
          <AnswerField
            correctAnswer={QUESTIONS[0].correctAnswer}
            options={QUESTIONS[0].options}
            tips={QUESTIONS[0].tips}
          />
        </div>
      </div>

      <footer>
        Feito com ❤️ por Pedro Flores, Pedro e Sá e Vinicius Pacheco.
      </footer>
    </div>
  );
}

export default App;
