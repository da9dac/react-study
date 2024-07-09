export default function GameBoard({ onSelectSquare, gameBoard }) {
    
    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIdx) => (
                    <li key={rowIdx}>
                        <ol>
                            {row.map((col, colIdx) => (
                                <li key={colIdx}>
                                    <button 
                                        onClick={() => onSelectSquare(rowIdx, colIdx)}
                                        disabled={col !== null}
                                    >
                                        {col}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                )
            )}
        </ol>
    )
}