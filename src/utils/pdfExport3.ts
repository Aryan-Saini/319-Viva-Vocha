/**
 * Exports all slides to PDF by opening the print view for presentation 3
 * Uses the browser's native print functionality with a dedicated print layout
 */
export const exportToPDF3 = (): void => {
  const printWindow = window.open('/print3', '_blank');
  
  if (!printWindow) {
    window.location.href = '/print3';
    return;
  }
};