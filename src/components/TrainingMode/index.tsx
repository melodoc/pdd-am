import { useCallback, useState } from 'react';
import { TQuestions } from '../../types/question';
import AnswerList from './components/AnswerList';
import Result from './components/Result';
import NavigationButtons from './components/NavigationButtons';

type TProps = {
  questions: Array<TQuestions>;
};

const TrainingMode = ({ questions }: TProps) => {
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

  const { question, imageUrl, answers, correctAnswer } = questions[currentQuestion];
  const isPrevDisabled = currentQuestion === 0;
  const isNextDisabled = currentQuestion === questions.length - 1;

  return (
    <div style={{ maxWidth: '900px' }}>
      <div>
        <h3>{question}</h3>
        {imageUrl && <img src={imageUrl} alt="Картинка вопроса" style={{ maxWidth: '100%', height: 'auto' }} />}
        <AnswerList
          answers={answers}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onAnswerClick={handleAnswerClick}
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
        <form style={{ marginTop: '20px' }} onSubmit={handleGoToQuestionClick}>
          <input
            type="number"
            value={inputQuestionNumber}
            onChange={handleInputChange}
            placeholder="Введите номер вопроса"
          />
          <button onClick={handleGoToQuestionClick}>К вопросу</button>
        </form>
      </div>
    </div>
  );
};

export default TrainingMode;
