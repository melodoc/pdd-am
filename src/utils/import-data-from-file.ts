export const importDataFromFile = (key: string, file: File) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const result = event.target?.result;
    if (result) {
      localStorage.setItem(key, result as string);
      // Обновляем страницу, чтобы применить загруженные данные
      window.location.reload();
    }
  };
  reader.readAsText(file);
};
