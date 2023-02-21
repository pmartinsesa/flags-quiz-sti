import React from "react";

import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { Expert } from "../modules/Expert";

export type QuestionInterfaceProps = {
  expertModule: Expert;
};

export const FifthQuestion = ({ expertModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(4);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        questionIndex={4}
        redirectTo="/sixth-question"
      />
    </>
  );
};
