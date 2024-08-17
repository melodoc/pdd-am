import { useCallback, useState } from "react";
import { TOPICS } from "../../../../constants/topics";
import { getDeclension } from "../../../../utils/get-declension";
import { QUESTIONS_FORMS } from "./constants/questions-forms";
import { GROUP_EMOJIS } from "../../../../constants/group-emojis";

type TProps = {
    onSelectTopic: (id: number) => void;
};

function TopicList({ onSelectTopic }: Readonly<TProps>) {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const groups = Array.from(new Set(TOPICS.map((topic) => topic.group)));

  const filteredTopics = selectedGroup
    ? TOPICS.filter((topic) => topic.group === selectedGroup)
    : [];

  const handleGroupSelect = useCallback((group: number) => {
    setSelectedGroup(group);
  }, []);

  const handleOnClick = useCallback((id: number) => {
    onSelectTopic(id);
  }, [onSelectTopic]);

  return (
    <>
      <ul style={{
        listStyle: "none",
        display: "grid",
        margin: 0,
        padding: 0,
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gridGap: "10px",
      }}
      >
        {groups.map((group) => (
          <li key={`group_${group}`}>
            <button
              type="button"
              style={{
                minWidth: 0,
                width: "100%",
                marginBottom: "10px",
              }}
              onClick={() => handleGroupSelect(group)}
            >
              {`${GROUP_EMOJIS[group]}\u00A0Группа\u00A0${group}`}
            </button>
          </li>
        ))}
      </ul>

      {selectedGroup && (
        <>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            {`${GROUP_EMOJIS[selectedGroup]}\u00A0Группа\u00A0${selectedGroup}`}
          </h2>
          <ul style={{
            listStyle: "none",
            display: "grid",
            margin: 0,
            padding: 0,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gridGap: "10px",
          }}
          >
            {filteredTopics.map((topic) => (
              <li key={`${topic.id}_${topic.name}`}>
                <button
                  type="button"
                  style={{
                    minWidth: 0,
                    width: "100%",
                  }}
                  onClick={() => handleOnClick(topic.id)}
                >
                  <span>
                    {topic.subGroupName}
                  </span>
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
        </>
      )}
    </>
  );
}

export default TopicList;
