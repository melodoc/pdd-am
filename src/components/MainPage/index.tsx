import { useCallback, useEffect, useState } from "react";
import TrainingMode from "../TrainingMode";
import TopicSelector from "../TopicSelector";
import TroubleshootingMode from "../TroubleshootingMode";
import { TQuestions } from "../../types/question";
import { TSavedAnswers } from "../../types/answers";
import { TOPICS_MAP } from "../../constants/topics";
import { isNullable } from "../../utils/is-nullable";
import { getSavedIncorrectAnswers, saveIncorrectAnswers } from "../../utils/local-storage-helper";

function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [questions, setQuestions] = useState<TQuestions[]>([]);
  const [isTrainingModeOpen, setIsTrainingModeOpen] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<TSavedAnswers>(
    getSavedIncorrectAnswers() ?? {},
  );

  useEffect(() => {
    const savedIncorrectAnswers = getSavedIncorrectAnswers();
    if (!isNullable(savedIncorrectAnswers)) {
      setIncorrectAnswers(savedIncorrectAnswers);
    }
  }, []);

  useEffect(() => {
    saveIncorrectAnswers(incorrectAnswers);
  }, [incorrectAnswers]);

  const handleSelectTopic = useCallback((topicId: number) => {
    setSelectedTopic(topicId);
    const topic = TOPICS_MAP.get(topicId);
    if (topic) {
      setQuestions(topic.questions);
    }
  }, []);

  const handleResetTopic = useCallback(() => {
    setSelectedTopic(null);
    setIsTrainingModeOpen(false);
  }, []);

  const handleOpenTrainingMode = useCallback(() => {
    setIsTrainingModeOpen(true);
  }, []);

  const handleSaveIncorrectAnswer = useCallback((topicId: number, questionIndex: number) => {
    setIncorrectAnswers((prevIncorrectAnswers) => {
      const topicIncorrectAnswers = prevIncorrectAnswers[topicId] || [];
      return {
        ...prevIncorrectAnswers,
        [topicId]: [...topicIncorrectAnswers, questionIndex],
      };
    });
  }, []);

  return (
    <div>
      {!selectedTopic ? (
        <>
          <TopicSelector
            isTrainingModeOpen={isTrainingModeOpen}
            onSelectTopic={handleSelectTopic}
          />
          <TroubleshootingMode
            isTrainingModeOpen={isTrainingModeOpen}
            onOpenTrainingMode={handleOpenTrainingMode}
            onResetTopic={handleResetTopic}
          />
        </>
      ) : (
        <TrainingMode
          onResetTopic={handleResetTopic}
          questions={questions}
          topicId={selectedTopic}
          onSaveIncorrectAnswer={handleSaveIncorrectAnswer}
        />
      )}
    </div>
  );
}

export default MainPage;
