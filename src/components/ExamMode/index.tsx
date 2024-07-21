import TrainingMode from "../TrainingMode";
import { generateExamQuestions } from "./utils/get-random-questions";
import { TOPICS_MAP } from "../../constants/topics";

type TProps = {
  onResetTopic: () => void;
  onOpenTrainingMode: () => void;
  isTrainingModeOpen: boolean;
};

const questions = generateExamQuestions(TOPICS_MAP);

function ExamMode({ onResetTopic, onOpenTrainingMode, isTrainingModeOpen }: TProps) {
  return (
    <>
      <h1>
        Экзаменационный режим
      </h1>
      {!isTrainingModeOpen && (
      <button
        type="button"
        onClick={onOpenTrainingMode}
      >
        Открыть экзаменационный режим
      </button>
      )}
      {isTrainingModeOpen && (
      <TrainingMode
        questions={questions}
        onResetTopic={onResetTopic}
        showNavigationForm={false}
      />
      )}
    </>
  );
}

export default ExamMode;
