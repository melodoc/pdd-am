import { useCallback, useState } from "react";
import { TQuestions } from "../../types/question";
import AnswerList from "./components/AnswerList";
import Result from "./components/Result";
import NavigationButtons from "./components/NavigationButtons";
import NavigationForm from "./components/NavigationForm";
import QuestionImage from "./components/Image";

type TProps = {
  questions: Array<TQuestions>;
  onResetTopic: () => void;
  topicId: number;
  onSaveIncorrectAnswer?: (topicId: number, questionIndex: number) => void;
  showNavigationForm?: boolean;
};

function TrainingMode({
  questions,
  onResetTopic,
  topicId,
  onSaveIncorrectAnswer,
  showNavigationForm = true,
}: Readonly<TProps>) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [inputQuestionNumber, setInputQuestionNumber] = useState<string>("");

  const handleAnswerClick = useCallback(
    (index: number) => {
      setSelectedAnswer(index);
      setShowResult(true);
      if (index !== questions[currentQuestion].correctAnswer) {
        onSaveIncorrectAnswer?.(topicId, currentQuestion);
      }
    },
    [currentQuestion, onSaveIncorrectAnswer, questions, topicId],
  );

  const handleNextQuestionClick = useCallback(() => {
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [currentQuestion, questions.length]);

  const handlePrevQuestionClick = useCallback(() => {
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuestionNumber(e.target.value);
  };

  const handleGoToQuestionClick = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();
    const questionNumber = parseInt(inputQuestionNumber, 10) - 1;
    if (questionNumber >= 0 && questionNumber < questions.length) {
      setCurrentQuestion(questionNumber);
      setShowResult(false);
      setSelectedAnswer(null);
    }
  };

  const {
    question,
    imageUrl,
    answers,
    correctAnswer,
  } = questions[currentQuestion];
  const isPrevDisabled = currentQuestion === 0;
  const isNextDisabled = currentQuestion === questions.length - 1;

  return (
    <div style={{ maxWidth: "900px" }}>
      <div>
        <h2>{`Вопрос.\u00A0${question}`}</h2>
        <QuestionImage imageUrl={imageUrl} />
        <AnswerList
          answers={answers}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onAnswerClick={handleAnswerClick}
          onNextQuestionClick={handleNextQuestionClick}
        />
        {showResult && (
          <Result
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
            answers={answers}
          />
        )}
        <NavigationButtons
          handlePrevQuestionClick={handlePrevQuestionClick}
          handleNextQuestionClick={handleNextQuestionClick}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
        />
        {showNavigationForm && (
          <NavigationForm
            onGoToQuestionClick={handleGoToQuestionClick}
            onInputChange={handleInputChange}
            inputQuestionNumber={inputQuestionNumber}
            onResetTopic={onResetTopic}
          />
        )}
      </div>
    </div>
  );
}

export default TrainingMode;
