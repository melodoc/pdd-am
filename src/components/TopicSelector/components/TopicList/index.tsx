import { useCallback } from "react";
import { TOPICS } from "../../../../constants/topics";
import { getDeclension } from "../../../../utils/get-declension";
import { QUESTIONS_FORMS } from "./constants/questions-forms";

type TProps = {
    onSelectTopic: (id: number) => void;
};

function TopicList({ onSelectTopic }: Readonly<TProps>) {
  const handleOnClick = useCallback((id: number) => {
    onSelectTopic(id);
  }, [onSelectTopic]);

  return (
    <ul style={{
      listStyle: "none",
      display: "grid",
      margin: 0,
      padding: 0,
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: "10px",
    }}
    >
      {TOPICS.map((topic) => (
        <li key={`${topic.id}_${topic.name}`}>
          <button
            type="button"
            style={{
              minWidth: 0,
              width: "100%",
            }}
            onClick={() => handleOnClick(topic.id)}
          >
            <span>{topic.name}</span>
            <span
              style={{
                marginLeft: "8px",
              }}
            >
              {`(${getDeclension(topic.questions.length, QUESTIONS_FORMS)})`}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TopicList;
