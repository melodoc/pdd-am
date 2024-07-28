import { useCallback } from "react";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";
import { exportDataToFile } from "../../utils/export-data-to-file";
import { importDataFromFile } from "../../utils/import-data-from-file";
import "./styles.css";

const CUSTOM_BUTTON_ID = "file-upload";

function DataManagementPanel() {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importDataFromFile(LOCAL_STORAGE_KEYS.answers, file);
    }
  }, []);

  const handleExportDataToFile = useCallback(() => {
    exportDataToFile(LOCAL_STORAGE_KEYS.answers, "incorrectAnswers.json");
  }, []);

  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(182 118 0)",
          color: "white",
        }}
        onClick={handleExportDataToFile}
      >
        🗃️ Экспортировать вопросы для тренировки
      </button>
      <div className="file-upload-button">
        <label
          style={{
            backgroundColor: "rgb(9 115 9)",
            color: "white",
          }}
          className="file-upload-label"
          htmlFor={CUSTOM_BUTTON_ID}
        >
          <input
            accept=".json"
            className="file-upload-input"
            id={CUSTOM_BUTTON_ID}
            name="file-upload-input"
            onChange={handleFileUpload}
            type="file"
            aria-labelledby="file-upload-label"
          />
          🗂️ Импортировать вопросы для тренировки
        </label>
      </div>
    </>
  );
}

export default DataManagementPanel;
