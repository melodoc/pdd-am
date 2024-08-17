import { memo } from "react";
import { GroupButton } from "./components/GroupButton";

type TProps = {
  groups: number[];
  selectedGroup: number | null;
  onGroupSelect: (group: number) => void;
};

export const GroupList = memo(
  ({ groups, selectedGroup, onGroupSelect }: TProps) => (
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
          <GroupButton
            group={group}
            selectedGroup={selectedGroup}
            onClick={onGroupSelect}
          />
        </li>
      ))}
    </ul>
  ),
);
