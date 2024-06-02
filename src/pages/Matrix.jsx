import useMatrixLength from "../zustand-stores/matrix-length";
import "../css/matrix.css";

const Matrix = () => {
  const cols = useMatrixLength.use.matrixColLength();
  const rows = useMatrixLength.use.matrixRowLength();

  const generateFrobeniusMatrix = (rows, cols) => {
    const matrix = [];
    const randomColIndex = Math.floor(Math.random() * cols); // Generate random column index

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        if (i === j) {
          row.push(1); // Set diagonal elements to 1
        } else if (j === randomColIndex && i > j) {
          row.push(Math.floor(Math.random() * 9) + 1); // Generate random number only in the cols below the main diagonal
        } else {
          row.push(0); // Set all other elements to 0
        }
      }
      matrix.push(row);
    }

    return matrix;
  };

  const frobenius = generateFrobeniusMatrix(rows, cols);

  // console.log(frobenius.map((row) => row.join(" ")).join("\n"));

  return (
    <div className="matrix-container">
      <h1>Frobenius Matrix</h1>
      <h2>Rows: {rows}</h2>
      <h2 className="col-title">Columns: {cols}</h2>
      {frobenius.map((row, rowIndex) => (
        <div key={rowIndex} className="matrix-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="matrix-cell">
              {cell}
            </div>
          ))}
          {rowIndex !== rows - 1 && <div className="matrix-space" />}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
