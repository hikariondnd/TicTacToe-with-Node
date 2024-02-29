TicTacToe.js

import { useState } from 'react';
function Square({value, onSquareclick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            value
        </button>    
    );
}

function Board({ xIsNext, squares, onPlay}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slices();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            next squares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
    )
}