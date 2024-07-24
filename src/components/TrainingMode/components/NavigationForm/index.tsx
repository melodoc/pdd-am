import BackToTopicButton from "../../../../shared-components/BackToTopicButton";

type TProps = {
    inputQuestionNumber: string;
    onGoToQuestionClick: (e: React.ChangeEvent<unknown>) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onResetTopic: () => void;
};

function Navigation({
  inputQuestionNumber,
  onGoToQuestionClick,
  onInputChange,
  onResetTopic,
}: Readonly<TProps>) {
  return (
    <div
      style={{
        display: "flex", justifyContent: "center", gap: "8px", flexDirection: "column", marginTop: "32px",
      }}
    >
      <form
        style={{
          display: "flex", justifyContent: "center", flexDirection: "column", gap: "8px",
        }}
        onSubmit={onGoToQuestionClick}
      >
        <BackToTopicButton onResetTopic={onResetTopic} />
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <button
            type="button"
            style={{ width: "100%" }}
            onClick={onGoToQuestionClick}
          >
            ❓ К вопросу:
          </button>
          <input
            style={{ width: "100%" }}
            type="number"
            value={inputQuestionNumber}
            onChange={onInputChange}
            placeholder="Номер вопроса: 23"
          />
        </div>
      </form>
    </div>
  );
}

export default Navigation;
