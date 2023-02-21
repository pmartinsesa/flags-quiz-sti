import { Questions } from "../database/questions";

import { ExpertType, QuestionType } from "../types";

export class Expert {
  private Questions: Array<ExpertType> = Questions;

  public getQuestionFields(index: number): QuestionType {
    return {
      flag: this.Questions[index].flag,
      options: this.Questions[index].options,
    };
  }

  public isCorrectAnswer(value: string, index: number): boolean {
    return this.Questions[index].correctAnswer === value;
  }

  public getTips(index: number): Array<string> {
    return this.Questions[index].tips;
  }
}
