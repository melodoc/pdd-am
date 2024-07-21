type TProps = {
    selectedAnswer: number | null;
    correctAnswer: number;
    answers: string[];
};

function Result({ selectedAnswer, correctAnswer, answers }: TProps) {
  return (
    selectedAnswer === correctAnswer ? (
      <p>Правильно!</p>
    ) : (
      <p>
        Неправильно! Правильный ответ:
        {answers[correctAnswer]}
      </p>
    )
  );
}

export default Result;
