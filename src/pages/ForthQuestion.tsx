import React from "react";

import { QuestionField } from "../components/Question/QuestionField";
import { AnswerField } from "../components/Answer/AnswerField";
import { Expert } from "../modules/Expert";

export type QuestionInterfaceProps = {
  expertModule: Expert;
};

export const ForthQuestion = ({ expertModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(3);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        questionIndex={3}
        redirectTo="/fifth-question"
      />
    </>
  );
};