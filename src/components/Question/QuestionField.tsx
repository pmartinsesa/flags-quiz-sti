import "./questionField.css"

export type QuestionFieldProps = {
  number: number;
  flag: string;
  description: string;
};

export const QuestionField = ({ number, flag, description }: QuestionFieldProps) => {
  return (
    <>
      <div className="question-structure">
        <img src={flag} alt="flag-question" />
        {/* <div className="question">
          <h4 className="question-title">{`Questão ${number}/3`}</h4>
        </div> */}
      </div>
    </>
  );
};
