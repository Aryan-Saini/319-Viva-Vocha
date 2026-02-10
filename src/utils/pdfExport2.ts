/**
 * Exports all slides to PDF by opening the print view for presentation 2
 * Uses the browser's native print functionality with a dedicated print layout
 */
export const exportToPDF2 = (): void => {
  // Open the print view in a new tab
  const printWindow = window.open('/print2', '_blank');
  
  if (!printWindow) {
    // Fallback: if popup is blocked, navigate to print view in same window
    window.location.href = '/print2';
    return;
  }
};
