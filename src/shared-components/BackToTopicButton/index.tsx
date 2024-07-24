import React from "react";

type TProps = {
    onResetTopic: () => void;
};

const BackToTopicButton = React.memo<Readonly<TProps>>(({ onResetTopic }: TProps) => (
  <button type="button" onClick={onResetTopic}>
    📚 К темам
  </button>

));

export default BackToTopicButton;
