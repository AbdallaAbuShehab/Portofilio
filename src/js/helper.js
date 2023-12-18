// Function to trigger the download
export function downloadPdf(pdfUrl) {
  fetch(pdfUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a blob URL for the PDF data
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded.pdf"; // Set the desired file name
      document.body.appendChild(a);

      // Trigger a click event on the link element to initiate the download
      a.click();

      // Clean up by revoking the blob URL and removing the link element
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((error) => {
      console.error("Failed to download the PDF file: ", error);
    });
}
