import React from "react";

import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { Expert } from "../modules/Expert";
import { Student } from "../modules/Student";

export type QuestionInterfaceProps = {
  expertModule: Expert;
  studentModule: Student;
};

export const ThirdQuestion = ({ expertModule, studentModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(2);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        studentModule={studentModule}
        questionIndex={2}
        redirectTo="/forth-question"
      />
    </>
  );
};
