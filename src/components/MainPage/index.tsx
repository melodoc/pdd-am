import { useCallback, useState } from "react";
import TrainingMode from "../TrainingMode";
import TopicSelector from "../TopicSelector";
import { TQuestions } from "../../types/question";
import { TOPICS_MAP } from "../../constants/topics";
import ExamMode from "../ExamMode";

function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [questions, setQuestions] = useState<TQuestions[]>([]);
  const [isTrainingModeOpen, setIsTrainingModeOpen] = useState(false);

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

  return (
    <div>
      {!selectedTopic ? (
        <>
          {!isTrainingModeOpen && <TopicSelector onSelectTopic={handleSelectTopic} />}
          <ExamMode
            isTrainingModeOpen={isTrainingModeOpen}
            onOpenTrainingMode={handleOpenTrainingMode}
            onResetTopic={handleResetTopic}
          />
        </>
      ) : (
        <TrainingMode onResetTopic={handleResetTopic} questions={questions} />
      )}
    </div>
  );
}

export default MainPage;
