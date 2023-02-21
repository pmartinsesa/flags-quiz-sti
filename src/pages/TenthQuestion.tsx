import React from "react";

import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { Expert } from "../modules/Expert";

export type QuestionInterfaceProps = {
  expertModule: Expert;
};

export const TenthQuestion = ({ expertModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(9);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        questionIndex={9}
        redirectTo="/first-question"
      />
    </>
  );
};
