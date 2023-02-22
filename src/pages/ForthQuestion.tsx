import React from "react";

import { QuestionField } from "../components/Question/QuestionField";
import { AnswerField } from "../components/Answer/AnswerField";
import { Expert } from "../modules/Expert";
import { Student } from "../modules/Student";

export type QuestionInterfaceProps = {
  expertModule: Expert;
  studentModule: Student;
};

export const ForthQuestion = ({ expertModule, studentModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(3);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        studentModule={studentModule}
        questionIndex={3}
        redirectTo="/fifth-question"
      />
    </>
  );
};
