import china from "../assets/flags/china.png";
import holanda from "../assets/flags/holanda.png";
import finlandia from "../assets/flags/finlandia.png";
import novaZelandia from "../assets/flags/novaZelandia.png";
import namibia from "../assets/flags/namibia.png";
import timorLeste from "../assets/flags/timorLeste.png";
import micronesia from "../assets/flags/micronesia.png";
import argentina from "../assets/flags/argentina.png";
import eslovenia from "../assets/flags/eslovenia.png";
import cuba from "../assets/flags/cuba.png";
import brasil from "../assets/flags/brasil.png";

import { ExpertType } from "../types";

export const Questions: Array<ExpertType> = [
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
    flag: argentina,
    options: ["Uruguai", "Peru", "Reino Unido", "Argentina", "Patagônia"],
    correctAnswer: "Argentina",
    tips: [
      "Perdeu para a Arábia Saudita na Copa do Mundo.",
      "Tem mais vacas que pessoas.",
      "Fica próximo ao Ria da Prata.",
      "Famosos pelo seu alfajor.",
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
    flag: cuba,
    options: [
      "Republica Dominicana",
      "Costa Rica",
      "Ilhas Fiji",
      "Cuba",
      "Guatemala",
    ],
    correctAnswer: "Cuba",
    tips: [
      "O seu idioma oficial é o espanhol.",
      "Conhecida no passsado pela pirataria.",
      "Abriga um dos maiores presidios do mundo em sua ilha.",
      "País importante na Guerra Fria.",
    ],
  },
  {
    flag: finlandia,
    options: ["Noruega", "Dinamarca", "Suécia", "Suiça", "Finlândia"],
    correctAnswer: "Finlândia",
    tips: [
      "Ganhou sua independência da Russia.",
      "Único país nórdico que não pertence a Escandinávia.",
      "Fala um idioma muito diferente de seus vizinhos.",
      "Sua capital é Helsinki.",
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
  {
    flag: eslovenia,
    options: [
      "Eslováquia",
      "Sérvia",
      "Eslovênia",
      "Húngria",
      "Bosnia e Herzegovina",
    ],
    correctAnswer: "Eslovênia",
    tips: [
      "Recebou sua independência da Iugoslávia.",
      "Sua capital Liubliana.",
      "Faz parte da União Europeia.",
      "Sua população é praticamente equivalente a população de Curitiba.",
    ],
  },
  {
    flag: namibia,
    options: [
      "Togo",
      "Africa do Sul",
      "Namibia",
      "Papua Nova Guiné",
      "Jamaica",
    ],
    correctAnswer: "Namibia",
    tips: [
      "Está localizado em um Deserto.",
      "Faz parte da Africa.",
      "Foi colonia Alemã até o inicio da Primeira Guerra Mundial.",
      "A língua oficial do país é o inglês.",
    ],
  },
  {
    flag: timorLeste,
    options: [
      "Mozambique",
      "Taiwan",
      "Ilhas Malvinas",
      "Belgica",
      "Timor Leste",
    ],
    correctAnswer: "Timor Leste",
    tips: [
      "Um dos únicos paísed cristãos de sua região.",
      "Menor que o Sergipe.",
      "Teve conflitos com a Indonésia.",
      "Fala português.",
    ],
  },
  {
    flag: micronesia,
    options: ["Micronésia", "Ilhas Aland", "Somália", "Sérvia", "Níger"],
    correctAnswer: "Micronésia",
    tips: [
      "Sua capital é Palikir.",
      "Um país formado por mais de 600 ilhas.",
      "Abriga um dos maiores carangueijos do mundo: carangueijo-dos-coqueiros.",
      "Um dos 22 países do mundo que não possuí exercito próprio.",
    ],
  },
  {
    flag: brasil,
    options: ["Brasil", "Uruguai", "Espanha", "Peru", "Portugal"],
    correctAnswer: "Brasil",
    tips: [
      "Tem mais Copas do Mundo do que a Argentina.",
      "Tem PIB maior que a Argentina.",
      "Conhecido por praias mais bonitas que as da Argentina.",
      "Mais biodiversidade que a Argentina.",
    ],
  },
];
