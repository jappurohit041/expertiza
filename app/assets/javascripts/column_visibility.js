// Column visibility control functionality
function toggleColumn(tableId, columnIndex, checked) {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  // Toggle header and all cells in the column
  const cells = table.getElementsByTagName('tr');
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i].getElementsByTagName('td')[columnIndex];
    if (cell) {
      cell.style.display = checked ? '' : 'none';
    }
    const header = cells[i].getElementsByTagName('th')[columnIndex];
    if (header) {
      header.style.display = checked ? '' : 'none';
    }
  }
}

// Initialize column controls
function initColumnControls(tableId, controlsId) {
  const controls = document.getElementById(controlsId);
  if (!controls) return;
  
  controls.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
      toggleColumn(tableId, e.target.dataset.columnIndex, e.target.checked);
    }
  });
} 