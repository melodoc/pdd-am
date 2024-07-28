const black = "#1a1a1a";
type AnswerStyle = "white" | "green" | "red" | typeof black;

const getThemeColor = (isDarkMode: boolean): AnswerStyle => (isDarkMode ? "white" : black);

export const getAnswerStyle = (
  index: number,
  correctAnswer: number | null,
  selectedAnswer: number | null,
  showResult: boolean,
): AnswerStyle => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeColor = getThemeColor(isDarkMode);

  if (!showResult) return themeColor;
  if (index === correctAnswer) return "green";
  if (index === selectedAnswer) return "red";
  return themeColor;
};
