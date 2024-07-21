type AnswerStyle = "white" | "green" | "red";

export const getAnswerStyle = (
  index: number,
  correctAnswer: number | null,
  selectedAnswer: number | null,
  showResult: boolean,
): AnswerStyle => {
  if (!showResult) return "white";
  if (index === correctAnswer) return "green";
  if (index === selectedAnswer) return "red";
  return "white";
};
