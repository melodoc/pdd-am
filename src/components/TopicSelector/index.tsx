import { useCallback } from "react";
import { TOPICS } from "../../constants/topics";
import { getDeclension } from "../../utils/get-declension";
import { QUESTIONS_FORMS } from "./constants/questions-forms";

type TProps = {
    onSelectTopic: (id: number) => void;
};

function TopicSelector({ onSelectTopic }: TProps) {
  const handleOnClick = useCallback((id: number) => {
    onSelectTopic(id);
  }, [onSelectTopic]);

  return (
    <div>
      <h1>
        🏁 ПДД 2024: Список вопросов к теоретическим экзаменам
        на водительские права Республики Армения 🇦🇲
      </h1>
      <h2>Вопросы ПДД по группам</h2>
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
    </div>
  );
}

export default TopicSelector;
