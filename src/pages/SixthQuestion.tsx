import React from "react";

import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { Expert } from "../modules/Expert";

export type QuestionInterfaceProps = {
  expertModule: Expert;
};

export const SixthQuestion = ({ expertModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(5);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        questionIndex={5}
        redirectTo="/seventh-question"
      />
    </>
  );
};
