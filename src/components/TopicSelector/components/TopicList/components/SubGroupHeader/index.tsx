import { memo } from "react";
import { GROUP_EMOJIS } from "../../constants/group-emojis";

type TProps = {
  group: number;
};

export const SubGroupHeader = memo(
  ({ group } : TProps) => (
    <h2
      style={{
        textAlign: "center",
      }}
    >
      {`${GROUP_EMOJIS[group]}\u00A0Группа\u00A0${group}`}
    </h2>
  ),
);
