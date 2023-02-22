import React from "react";

import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { Expert } from "../modules/Expert";
import { Student } from "../modules/Student";
import { Tutorial } from "../modules/Tutorial";

export type QuestionInterfaceProps = {
  expertModule: Expert;
  studentModule: Student;
  tutorialModule: Tutorial
};

export const SeventhQuestion = ({ expertModule, studentModule, tutorialModule }: QuestionInterfaceProps) => {
  const question = expertModule.getQuestionFields(6);

  return (
    <>
      <QuestionField flag={question.flag} />
      <AnswerField
        options={question.options}
        expertModule={expertModule}
        studentModule={studentModule}
        tutorialModule={tutorialModule}
        questionIndex={6}
        redirectTo="/eighth-question"
      />
    </>
  );
};
