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
}: TProps) {
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
        <button
          type="button"
          onClick={onResetTopic}
        >
          📚 К темам
        </button>
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
