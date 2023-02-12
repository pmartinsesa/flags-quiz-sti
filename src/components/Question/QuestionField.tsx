import "./questionField.css"

export type QuestionFieldProps = {
  flag: string;
};

export const QuestionField = ({ flag }: QuestionFieldProps) => {
  return (
    <>
      <div className="question-structure">
        <img src={flag} alt="flag-question" />
      </div>
    </>
  );
};
