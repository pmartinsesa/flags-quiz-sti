import { Expert } from "./Expert";

export class Tutorial {
  private readonly expert: Expert;
  public questionToReturnTo: string;
  public currentEasyQuestion: Boolean;
  private shownEasyQuestion: Boolean;
  public readonly redirections = [
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
    "/easy-question"
  ];

  constructor() {
    this.expert = new Expert();
    this.questionToReturnTo = "";
    this.currentEasyQuestion = false;
    this.shownEasyQuestion = false;
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

  public hasTwoVeryWrongQuestionsInRow(consectiveVeryWrongQuestions: number): boolean {
    if (consectiveVeryWrongQuestions > 0) {
      return consectiveVeryWrongQuestions % 2 == 0;
    }

    return false;
  }

  public skipNextQuestion(questionIndex: number): string {
    if (questionIndex + 2 >= this.redirections.length) {
      return this.redirections[this.redirections.length - 1];
    }
    return this.redirections[questionIndex + 2];
  }

  public goToEasyQuestion(questionIndex: number): string {

    this.shownEasyQuestion = true;

    if (questionIndex < 9) {
      this.questionToReturnTo = this.redirections[questionIndex + 1]
    } else {
      this.questionToReturnTo = this.redirections[9]
    }

    return this.redirections[10];
  }

  public getQuestionToReturnTo(): string {
    return this.questionToReturnTo;
  }

  public isEasyQuestion(): Boolean {
    return this.currentEasyQuestion
  }

  public hasShownEasyQuestion(): Boolean {
    return this.shownEasyQuestion
  }
}
