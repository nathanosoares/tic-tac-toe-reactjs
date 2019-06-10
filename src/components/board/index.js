import React from 'react'
import Square from '../square'
import {
    BoardStyled,
    SectionStyled,
    ResetButtonStyled
} from './style'

export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            next: 'X',
            blocked: false,
            winnerSquares: Array(3).fill(null)
        }
    }

    renderSquare(index) {
        return (
            <Square
                key={index}
                winner={this.state.winnerSquares.some((i) => index === i)}
                value={this.state.squares[index]}
                onClick={() => this.handleClick(index)} />
        )
    }

    handleClick(index) {
        const squares = this.state.squares.slice()

        if (this.state.blocked || squares[index] != null) {
            return
        }

        squares[index] = this.state.next

        const winnerSquares = this.calculateWinner(squares)

        const blocked = winnerSquares || squares.every(i => i != null)

        this.setState({
            squares,
            next: this.state.next === 'X' ? 'O' : 'X',
            blocked,
            winnerSquares: winnerSquares ? winnerSquares : Array(3).fill(null)
        })
    }

    restartGame() {
        this.setState({
            ...this.state,
            squares: Array(9).fill(null),
            blocked: false,
            winnerSquares: Array(3).fill(null)
        })
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return [a, b, c]
            }
        }

        return null
    }

    renderStatusMessage() {
        if (this.state.blocked) {
            if (this.state.winnerSquares.some(i => i != null)) {
                return (
                    <p>Vencedor <strong style={{ fontSize: '1.5rem' }}>{this.state.next === 'X' ? 'O' : 'X'}</strong></p>
                )
            }

            return (
                <p>Empate</p>
            )
        }

        if (this.state.squares.filter(value => value != null).length) {
            return (
                <p>Vez de <strong style={{ fontSize: '1.5rem' }}>{this.state.next}</strong></p>
            )
        }

        return (
            <p><strong style={{ fontSize: '1.5rem' }}>{this.state.next}</strong> comece o jogo</p>
        )
    }

    render() {
        return (
            <SectionStyled>
                {this.renderStatusMessage()}

                <BoardStyled>
                    {this.state.squares.map((value, index) => this.renderSquare(index))}
                </BoardStyled>

                <ResetButtonStyled onClick={() => this.restartGame()} className={'btn-restart'}>Reiniciar</ResetButtonStyled>
            </SectionStyled>
        )
    }
}