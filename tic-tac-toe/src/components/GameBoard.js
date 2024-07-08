import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIdx, colIdx) {
        setGameBoard((prevGameBoard) => {
            const updateBoard = 
                [...prevGameBoard.map(innerArray => [...innerArray])];
                updateBoard[rowIdx][colIdx] = activePlayerSymbol;
            return updateBoard;
        });

        onSelectSquare()
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIdx) => (
                    <li key={rowIdx}>
                        <ol>
                            {row.map((col, colIdx) => (
                                <li key={colIdx}>
                                    <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                )
            )}
        </ol>
    )
}