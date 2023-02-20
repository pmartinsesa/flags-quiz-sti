import React from "react";
import { useNavigate } from "react-router";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import "./answerField.css";

import { Expert } from "../../modules/Expert";
import { Tutorial } from "../../modules/Tutorial";

export type AnswerFieldProps = {
  options: Array<string>;
  questionIndex: number;
  expertModule: Expert;
  redirectTo: string;
};

export const AnswerField = ({
  options,
  questionIndex,
  expertModule,
  redirectTo,
}: AnswerFieldProps) => {
  const tutorialModule = new Tutorial();
  const navigate = useNavigate();

  const [value, setValue] = React.useState("");
  const [errorCounter, setErrorCounter] = React.useState(0);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  //Usar useNavigate para redirecionar entre paginas....
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expertModule.isCorrectAnswer(value, questionIndex)) {
      alert("Acerto");
      setErrorCounter(0);

      navigate(redirectTo);
    } else if (!expertModule.isCorrectAnswer(value, questionIndex) && value.length > 0) {
      console.log("Sorry, wrong answer!");
      setErrorCounter(errorCounter + 1);
    } else {
      console.log("Please select an option.");
    }
  };

  const renderRadioButtons = (options: Array<string>) => {
    return options.map((option) => (
      <FormControlLabel
        value={option}
        label={option}
        control={<Radio />}
        sx={{ fontFamily: "Poppins", color: "" }}
      />
    ));
  };

  const renderTips = (tips: Array<string>) => {
    const tipsToShow = tips.slice(0, errorCounter);

    return tipsToShow.map((tip) => <li>{tip}</li>);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl variant="standard">
          <div className="answer-structure">
            <div>
              <h4 className="answer-title">Escolha uma opção</h4>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                {renderRadioButtons(options)}
              </RadioGroup>
            </div>
            {errorCounter === 0 ? (
              <></>
            ) : (
              <div className="tips">
                <h4 className="tips-title">Dicas</h4>
                {renderTips(tutorialModule.getPersonalTipsToAQuestion(questionIndex))}
              </div>
            )}
          </div>
        </FormControl>
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
      </form>
    </>
  );
};
