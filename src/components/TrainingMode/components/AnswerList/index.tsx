import { useCallback } from "react";
import { addNonBreakingSpace } from "../../../../utils/add-non-breaking-space";

type TProps = {
    answers: string[];
    correctAnswer: number;
    selectedAnswer: number | null;
    showResult: boolean;
    onAnswerClick: (index: number) => void;
};

function AnswerList({
  answers, correctAnswer, selectedAnswer, showResult, onAnswerClick,
}: TProps) {
  const getAnswerStyle = useCallback((index: number) => {
    if (!showResult) return "white";
    if (index === correctAnswer) return "green";
    if (index === selectedAnswer) return "red";
    return "white";
  }, [correctAnswer, selectedAnswer, showResult]);

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        marginBottom: "16px",
        padding: 0,
      }}
    >
      {answers.map((answer, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${index}+${answer}`}
          style={{
            marginBottom: "8px",
            color: getAnswerStyle(index),
          }}
        >
          <button
            onClick={() => onAnswerClick(index)}
            type="button"
            style={{
              marginBottom: "8px",
              textAlign: "left",
              color: getAnswerStyle(index),
            }}
          >
            {addNonBreakingSpace(answer)}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AnswerList;
