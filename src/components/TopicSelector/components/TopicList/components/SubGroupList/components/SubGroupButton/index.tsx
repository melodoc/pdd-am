import { memo } from "react";
import { getDeclension } from "../../../../../../../../utils/get-declension";
import { QUESTIONS_FORMS } from "../../../../constants/questions-forms";
import { TTopic } from "../../../../../../../../constants/topics";
import { getSelectedSubGroup } from "../../../../../../../../utils/local-storage-helper";

type TProps = {
  topic: TTopic;
  onClick: (id: number) => void;
};

export const SubGroupButton = memo(
  ({ topic, onClick }: TProps) => {
    const selected = getSelectedSubGroup() === topic.id;

    return (
      <button
        type="button"
        style={{
          minWidth: 0,
          width: "100%",
          backgroundColor: selected ? "rgb(9, 115, 9)" : "#1a1a1a",
        }}
        onClick={() => onClick(topic.id)}
      >
        <span>{topic.subGroupName}</span>
        <span style={{ marginLeft: "8px" }}>
          {`(${getDeclension(topic.questions.length, QUESTIONS_FORMS)})`}
        </span>
      </button>
    );
  },
);
