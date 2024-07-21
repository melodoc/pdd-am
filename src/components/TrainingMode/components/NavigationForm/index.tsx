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
      <h3 style={{ margin: "0" }}>
        Навигация
      </h3>
      <form
        style={{
          display: "flex", justifyContent: "center", flexDirection: "column", gap: "8px",
        }}
        onSubmit={onGoToQuestionClick}
      >
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
            placeholder="Введите номер вопроса"
          />
        </div>
        <button
          type="button"
          onClick={onResetTopic}
        >
          📚 К темам
        </button>
      </form>
    </div>
  );
}

export default Navigation;
