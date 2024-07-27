import { useCallback, useEffect, useState } from "react";
import TrainingMode from "../TrainingMode";
import TopicSelector from "../TopicSelector";
import TroubleshootingMode from "../TroubleshootingMode";
import { TQuestions } from "../../types/question";
import { TSavedAnswers } from "../../types/answers";
import { TOPICS_MAP } from "../../constants/topics";
import { isNullable } from "../../utils/is-nullable";
import { getSavedIncorrectAnswers, saveIncorrectAnswers } from "../../utils/local-storage-helper";
import Header from "../Header";
import AdditionalFeatures from "../AdditionalFeatures";
import "./styles.css";

function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [isTopicPanelOpen, setIsTopicPanelOpen] = useState(false);
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
    setIsTopicPanelOpen(false);
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

  const handleTogglePanel = useCallback(() => {
    setIsTopicPanelOpen((prev) => !prev);
  }, []);

  const showSelectors = !selectedTopic && !isTrainingModeOpen;
  const showTopic = selectedTopic;

  return (
    <>
      {showSelectors && (
        <Header />
      )}
      <div className="main-page-container">
        {showSelectors && (
          <TopicSelector
            isTopicPanelOpen={isTopicPanelOpen}
            onSelectTopic={handleSelectTopic}
            onTogglePanel={handleTogglePanel}
          />
        )}
        {!showTopic && (
          <TroubleshootingMode
            isTrainingModeOpen={isTrainingModeOpen}
            onResetTopic={handleResetTopic}
            onOpenTrainingMode={handleOpenTrainingMode}
          />
        )}
        {showSelectors && (<AdditionalFeatures />)}
        {showTopic && (
          <TrainingMode
            onResetTopic={handleResetTopic}
            questions={questions}
            topicId={selectedTopic}
            onSaveIncorrectAnswer={handleSaveIncorrectAnswer}
          />
        )}
      </div>
    </>
  );
}

export default MainPage;
