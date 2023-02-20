import china from "../assets/flags/china.png";
import holanda from "../assets/flags/holanda.png";
import finlandia from "../assets/flags/finlandia.png";
import novaZelandia from "../assets/flags/novaZelandia.png";

import { ExpertType, QuestionType } from "../types";

export class Expert {
  private Questions: Array<ExpertType> = [
    {
      flag: holanda,
      options: ["Espanha", "França", "Italia", "Holanda", "Luxemburgo"],
      correctAnswer: "Holanda",
      tips: [
        "É um país da europa.",
        "No passado invadiu o Brasil.",
        "Terra das flores e dos moinhos de vento.",
        "Seu idioma é o holandes.",
      ],
    },
    {
      flag: finlandia,
      options: ["Ucrânia", "Polônia", "Suécia", "Suiça", "Finlândia"],
      correctAnswer: "Finlândia",
      tips: [
        "Ganhou sua independência da Russia.",
        "Único país nórdico que não pertence a Escandinávia.",
        "Fala um idioma muito diferente de seus vizinhos.",
        "Sua capital é Helsinki.",
      ],
    },
    {
      flag: china,
      options: ["Japão", "China", "Córeia do Norte", "Singapura", "Indonésia"],
      correctAnswer: "China",
      tips: [
        "Famosa por sua cultura milenar.",
        "Grande rival dos Estados Unidos.",
        "Tem a maior população do planeta.",
        "Sua grande atração turística é a Grande Muralha.",
      ],
    },
    {
      flag: novaZelandia,
      options: [
        "Nova Zelândia",
        "Indonésia",
        "Singapura",
        "Australia",
        "Tasmânia",
      ],
      correctAnswer: "Nova Zelândia",
      tips: [
        "Era colônia do Reino Unido e ainda tem inglês como idioma oficial.",
        "Sua população de ovelhas é maior que de pessoas.",
        "Seu povo indígina mais famoso são os Maori.",
        "Faz parte da Oceânia.",
      ],
    },
  ];

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
