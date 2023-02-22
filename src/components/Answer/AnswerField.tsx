import React from "react";
import { useNavigate } from "react-router";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";

import "./answerField.css";

import { Expert } from "../../modules/Expert";
import { Student } from "../../modules/Student";
import { Tutorial } from "../../modules/Tutorial";

export type AnswerFieldProps = {
  options: Array<string>;
  questionIndex: number;
  expertModule: Expert;
  studentModule: Student;
  redirectTo: string;
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const AnswerField = ({
  options,
  questionIndex,
  expertModule,
  studentModule,
  redirectTo,
}: AnswerFieldProps) => {
  const tutorialModule = new Tutorial();
  const navigate = useNavigate();

  const [value, setValue] = React.useState("");
  const [errorCounter, setErrorCounter] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
    if (isLastQuestion(questionIndex)) {
      studentModule.resetConsectiveRightQuestions();
    }

    if (
      tutorialModule.hasRightTwoQuestionsInRow(
        studentModule.getConsectiveRightQuestions()
      )
    ) {
      const newRedirect = tutorialModule.skipNextQuestion(questionIndex);
      navigate(newRedirect);
    } else {
      navigate(redirectTo);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (expertModule.isCorrectAnswer(value, questionIndex)) {
      setErrorCounter(0);
      studentModule.incrementConsectiveRightQuestions();
      setOpenModal(true);
    } else if (
      !expertModule.isCorrectAnswer(value, questionIndex) &&
      value.length > 0
    ) {
      setErrorCounter(errorCounter + 1);
      studentModule.resetConsectiveRightQuestions();
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

  const isLastQuestion = (questionIndex: number) => {
    return questionIndex === 9;
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
                {renderTips(
                  tutorialModule.getPersonalTipsToAQuestion(questionIndex)
                )}
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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 300 }}>
          <h2 id="child-modal-title">Parabéns</h2>
          <p style={{ marginTop: "0.5rem" }} id="child-modal-description">
            {isLastQuestion(questionIndex)
              ? "Você finalizou o quiz."
              : "Você acertou a bandeira."}
          </p>
          <Button
            style={{ marginTop: "1.5rem" }}
            variant="contained"
            color="success"
            onClick={handleClose}
          >
            {isLastQuestion(questionIndex)
              ? "Voltar ao inicio"
              : "Próxima Pergunta"}
          </Button>
        </Box>
      </Modal>
    </>
  );
};
