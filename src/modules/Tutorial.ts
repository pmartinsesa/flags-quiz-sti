import { Expert } from "./Expert";

export class Tutorial {
  private readonly expert: Expert;
  constructor() {
    this.expert = new Expert();
  } 
  
  public getPersonalTipsToAQuestion(questionIndex: number) {
    const tips = this.expert.getTips(questionIndex);

    // Criar um algoritmo pra ordenar as dicas de acordo com o modulo do estudante...

    return tips;
  }

  public passToNextQuestion() {
    //Criar um algorimo para passar para prox questão de acordo com o modulo do estudante...
  }
}

