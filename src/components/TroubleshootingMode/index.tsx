import { useEffect, useState } from "react";
import { getIncorrectQuestionsFromLocalStorage } from "./utils/get-incorrect-questions-from-local-storage";
import { TQuestions } from "../../types/question";
import BackToTopicButton from "../../shared-components/BackToTopicButton";
import OpenTroubleshootingButton from "./components/OpenTroubleshootingButton";
import TroubleshootingBody from "./components/TroubleshootingBody";

type TProps = {
  onResetTopic: () => void;
  onOpenTrainingMode: () => void;
  isTrainingModeOpen: boolean;
};

function TroubleshootingMode({
  onResetTopic,
  onOpenTrainingMode,
  isTrainingModeOpen,
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
      <h1>
        🔄  Режим работы над ошибками
      </h1>
      {isTrainingModeOpen ? (
        <>
          <TroubleshootingBody questions={questions} onResetTopic={onResetTopic} />
          <div style={{
            marginTop: "8px",
          }}
          >
            <BackToTopicButton onResetTopic={onResetTopic} />
          </div>
        </>
      )
        : <OpenTroubleshootingButton onOpenTrainingMode={onOpenTrainingMode} />}
    </>
  );
}

export default TroubleshootingMode;
