import { useCallback, useState } from "react";
import { TQuestions } from "../../types/question";
import AnswerList from "./components/AnswerList";
import Result from "./components/Result";
import NavigationButtons from "./components/NavigationButtons";
import NavigationForm from "./components/NavigationForm";

type TProps = {
  questions: Array<TQuestions>;
  onResetTopic: () => void;
  // eslint-disable-next-line react/require-default-props
  showNavigationForm?: boolean;
};

function TrainingMode({ questions, onResetTopic, showNavigationForm = true }: TProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [inputQuestionNumber, setInputQuestionNumber] = useState<string>("");

  const handleAnswerClick = useCallback((index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  }, []);

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
    question, imageUrl, answers, correctAnswer,
  } = questions[currentQuestion];
  const isPrevDisabled = currentQuestion === 0;
  const isNextDisabled = currentQuestion === questions.length - 1;

  return (
    <div style={{ maxWidth: "900px" }}>
      <div>
        <h2>
          {`Вопрос.\u00A0${question}`}
        </h2>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Картинка вопроса"
            style={{
              maxWidth: "700px",
              width: "100%",
              height: "auto",
              maxHeight: "270px",
              overflow: "hidden",
              objectFit: "contain",
              objectPosition: "center",
              marginBottom: "32px",
            }}
          />
        )}
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
        {!showNavigationForm && (
        <button
          type="button"
          onClick={onResetTopic}
        >
          📚 К темам
        </button>
        )}
      </div>
    </div>
  );
}

export default TrainingMode;
