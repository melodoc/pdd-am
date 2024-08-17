import { memo } from "react";
import { TTopic } from "../../../../../../constants/topics";
import { SubGroupButton } from "./components/SubGroupButton";

type TProps = {
  topics: TTopic[];
  onClick: (id: number) => void;
};

export const SubGroupList = memo(
  ({ topics, onClick }: TProps) => (
    <ul style={{
      listStyle: "none",
      display: "grid",
      margin: 0,
      padding: 0,
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gridGap: "10px",
    }}
    >
      {topics.map((topic) => (
        <li key={`${topic.id}_${topic.name}`}>
          <SubGroupButton
            topic={topic}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  ),
);
