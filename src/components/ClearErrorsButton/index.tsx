import { clearSavedIncorrectAnswers } from "../../utils/local-storage-helper";

function ClearErrorsButton() {
  const handleResetErrors = () => {
    clearSavedIncorrectAnswers();
  };

  return (
    <>
      <h1> 🧹 Очистить все ошибки</h1>
      <button type="button" onClick={handleResetErrors}>
        Очистить
      </button>
    </>
  );
}

export default ClearErrorsButton;
