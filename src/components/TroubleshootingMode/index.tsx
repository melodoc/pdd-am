import { useEffect, useState } from "react";
import { getIncorrectQuestionsFromLocalStorage } from "./utils/get-incorrect-questions-from-local-storage";
import { TQuestions } from "../../types/question";
import BackToTopicButton from "../../shared-components/BackToTopicButton";
import TroubleshootingBody from "./components/TroubleshootingBody";

type TProps = {
  isTrainingModeOpen: boolean;
  onResetTopic: () => void;
  onOpenTrainingMode: () => void;
};

function TroubleshootingMode({
  isTrainingModeOpen,
  onResetTopic,
  onOpenTrainingMode,
}: Readonly<TProps>) {
  const [questions, setQuestions] = useState<TQuestions[]>([]);

  useEffect(() => {
    const incorrectQuestionsMap = getIncorrectQuestionsFromLocalStorage();
    const allIncorrectQuestions = Array
      .from(incorrectQuestionsMap.values()).flatMap((topic) => topic.questions);
    setQuestions(allIncorrectQuestions);
  }, []);

  return (
    <>
      {isTrainingModeOpen && (
        <>
          <h1>❓ Режим работы над ошибками</h1>
          <TroubleshootingBody questions={questions} onResetTopic={onResetTopic} />
          <div style={{
            marginTop: "8px",
          }}
          >
            <BackToTopicButton onResetTopic={onResetTopic} />
          </div>
        </>
      )}
      <button
        style={{
          display: isTrainingModeOpen ? "none" : "block",
          backgroundColor: "rgb(191 52 1)",
        }}
        type="button"
        onClick={onOpenTrainingMode}
      >
        🧩 Работа над ошибками
      </button>
    </>
  );
}

export default TroubleshootingMode;
