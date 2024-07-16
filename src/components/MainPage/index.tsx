import { useCallback, useState } from 'react';
import TrainingMode from '../TrainingMode';
import TopicSelector from '../TopicSelector';
import { TQuestions } from '../../types/question';
import { TOPICS_MAP } from '../../constants/topics';

function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [questions, setQuestions] = useState<TQuestions[]>([]);

  const handleSelectTopic = useCallback((topicId: number) => {
    setSelectedTopic(topicId);
    const topic = TOPICS_MAP.get(topicId);
    if (topic) {
      setQuestions(topic.questions);
    }
  }, []);

  const handleResetTopic = useCallback(() => {
    setSelectedTopic(null);
  }, []);

  return (
    <div>
      {!selectedTopic ? (
        <TopicSelector onSelectTopic={handleSelectTopic} />
      ) : (<>
        <TrainingMode questions={questions} />
        <br/>
        <button onClick={handleResetTopic}>К темам</button>
      </>
      )}
    </div>
  );
}

export default MainPage;
