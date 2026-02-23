export default function gameBoard({ onSelectSquare, board }) {
  return (
    <>
      <ol id="game-board">
        {board.map(
          (
            row,
            rowIndex /*first value of a map method is the value inside the array, the second is the index of the array ALWAYS */,
          ) => (
            <li key={rowIndex}>
              <ol>
                {row.map(
                  (
                    playerSymbol,
                    colIndex /*first value of a map method is the value inside the array, the second is the index of the array ALWAYS */,
                  ) => (
                    <li key={colIndex}>
                      <button
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        disabled={playerSymbol !== null}
                      >
                        {playerSymbol}
                      </button>
                    </li>
                  ),
                )}
              </ol>
            </li>
          ),
        )}
      </ol>
    </>
  );
}
