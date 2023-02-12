import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";

import holanda from "../assets/flags/holanda.png";
import { QuestionType } from "../types";

const FIRST_QUESTION: QuestionType = {
  flag: holanda,
  options: ["Espanha", "França", "Italia", "Holanda", "Luxemburgo"],
  correctAnswer: "Holanda",
  tips: [
    "É um país da europa.",
    "No passado invadiu o Brasil.",
    "Terra das flores e dos moinhos de vento.",
    "Seu idioma é o holandes.",
  ],
};

export const FirstQuestion = () => {
  return (
    <>
      <QuestionField
        flag={FIRST_QUESTION.flag}
      />
      <AnswerField
        correctAnswer={FIRST_QUESTION.correctAnswer}
        options={FIRST_QUESTION.options}
        tips={FIRST_QUESTION.tips}
        redirectTo="/second-question"
      />
    </>
  );
};
