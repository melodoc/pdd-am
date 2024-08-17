import { memo } from "react";
import { GROUP_EMOJIS } from "../../../../constants/group-emojis";

type TProps = {
  group: number;
  selectedGroup: number | null;
  onClick: (group: number) => void;
};

export const GroupButton = memo(
  ({ group, selectedGroup, onClick }: TProps) => (
    <button
      type="button"
      style={{
        minWidth: 0,
        width: "100%",
        marginBottom: "10px",
        backgroundColor: selectedGroup === group ? "rgb(9, 115, 9)" : "#1a1a1a",
      }}
      onClick={() => onClick(group)}
    >
      {`${GROUP_EMOJIS[group]}\u00A0Группа\u00A0${group}`}
    </button>
  ),
);
