import { LOCAL_STORAGE_KEYS } from "../../../../constants/local-storage-keys";
import { exportDataToFile } from "../../../../utils/export-data-to-file";
import { importDataFromFile } from "../../../../utils/import-data-from-file";
import "./styles.css";

function DataManagementPanel() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importDataFromFile(LOCAL_STORAGE_KEYS.answers, file);
    }
  };

  return (
    <>
      <h1> 🎓 Управление вопросами для тренировки</h1>
      <div className="file-upload-container">
        <button type="button" onClick={() => exportDataToFile(LOCAL_STORAGE_KEYS.answers, "incorrectAnswers.json")}>
          🚚 Экспортировать
        </button>
        <div className="file-upload-buttons">
          <input
            accept=".json"
            className="file-upload-input"
            id="file-upload"
            name="file-upload-input"
            onChange={handleFileUpload}
            type="file"
            aria-labelledby="file-upload-label"
          />
          <label
            className="file-upload-label"
            htmlFor="file-upload"
          >
            📤 Импортировать
          </label>
        </div>
      </div>
    </>
  );
}

export default DataManagementPanel;
