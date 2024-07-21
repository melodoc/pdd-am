import { useCallback } from "react";
import { addNonBreakingSpace } from "../../../../utils/add-non-breaking-space";
import { getAnswerStyle } from "../../../../utils/get-answer-style";

type TProps = {
    answers: string[];
    correctAnswer: number;
    selectedAnswer: number | null;
    showResult: boolean;
    onAnswerClick: (index: number) => void;
    onNextQuestionClick: () => void;
};

function AnswerList({
  answers, correctAnswer, selectedAnswer, showResult, onAnswerClick, onNextQuestionClick,
}: TProps) {
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
            color: getAnswerStyle(index, correctAnswer, selectedAnswer, showResult),
          }}
        >
          <button
            onClick={() => (showResult ? onNextQuestionClick() : onAnswerClick(index))}
            type="button"
            style={{
              marginBottom: "8px",
              textAlign: "left",
              color: getAnswerStyle(index, correctAnswer, selectedAnswer, showResult),
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
