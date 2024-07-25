export const exportDataToFile = (localStorageKey: string, fileName: string) => {
  const data = localStorage.getItem(localStorageKey);
  if (data) {
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  } else {
    // eslint-disable-next-line no-console
    console.error(`No data found in localStorage for the key: ${localStorageKey}`);
  }
};
