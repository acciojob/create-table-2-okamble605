function createTable() {
  const table = document.getElementById('myTable');

  // Clear any existing table content
  table.innerHTML = '';

  // Prompt for number of rows
  const rows = parseInt(prompt('Input number of rows:'), 10);
  if (isNaN(rows) || rows <= 0) {
    alert('Please enter a valid number of rows.');
    return;
  }

  // Prompt for number of columns
  const cols = parseInt(prompt('Input number of columns:'), 10);
  if (isNaN(cols) || cols <= 0) {
    alert('Please enter a valid number of columns.');
    return;
  }

  // Create rows and columns
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(); // Create a new row
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(); // Create a new cell
      cell.textContent = `Row-${i} Column-${j}`; // Set cell content
    }
  }
}
