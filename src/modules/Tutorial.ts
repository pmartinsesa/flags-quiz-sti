import { Expert } from "./Expert";

export class Tutorial {
  private readonly expert: Expert;
  private readonly redirections = [
    "/first-question",
    "/second-question",
    "/third-question",
    "/forth-question",
    "/fifth-question",
    "/sixth-question",
    "/seventh-question",
    "/eighth-question",
    "/ninth-question",
    "/tenth-question",
  ];

  constructor() {
    this.expert = new Expert();
  }

  public getPersonalTipsToAQuestion(questionIndex: number) {
    const tips = this.expert.getTips(questionIndex);

    // Criar um algoritmo pra ordenar as dicas de acordo com o modulo do estudante...

    return tips;
  }

  public hasRightTwoQuestionsInRow(consectiveRightQuestions: number): boolean {
    if (consectiveRightQuestions > 0) {
      return consectiveRightQuestions % 2 == 0;
    }

    return false;
  }

  public skipNextQuestion(questionIndex: number): string {
    if (questionIndex + 2 >= this.redirections.length) {
      return this.redirections[this.redirections.length - 1];
    }
    return this.redirections[questionIndex + 2];
  }
}
