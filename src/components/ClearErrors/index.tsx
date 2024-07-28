import { clearSavedIncorrectAnswers } from "../../utils/local-storage-helper";

function ClearErrors() {
  const handleResetErrors = () => {
    clearSavedIncorrectAnswers();
    window?.location?.reload();
  };

  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      type="button"
      onClick={handleResetErrors}
    >
      🧹 Очистить все ошибки
    </button>
  );
}

export default ClearErrors;
