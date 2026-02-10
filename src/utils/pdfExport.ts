/**
 * Exports all slides to PDF by opening the print view
 * Uses the browser's native print functionality with a dedicated print layout
 */
export const exportToPDF = () => {
  // Open the print view in a new tab
  const printWindow = window.open('/print', '_blank');
  
  if (!printWindow) {
    // Fallback: if popup is blocked, navigate to print view in same window
    window.location.href = '/print';
    return;
  }
};

/**
 * Exports only the current slide to PDF
 * Uses the browser's native print functionality
 */
export const exportCurrentSlideToPDF = () => {
  // Store original styles
  const originalTitle = document.title;
  
  // Set document title for the PDF filename
  document.title = 'VivaVoice_Slide';
  
  // Trigger the browser's print dialog
  window.print();
  
  // Restore original title after print dialog closes
  setTimeout(() => {
    document.title = originalTitle;
  }, 100);
};
