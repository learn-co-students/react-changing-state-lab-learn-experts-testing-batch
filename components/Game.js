const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let board = this.state.board
    board[i] = this.state.turn
    let turn = this.state.turn === "X" ? "O" : "X"
    this.setState({
      board: board,
      turn: turn
    })
  }

  getWinner () {
    for (var index in solutions) {
      let winCombo = solutions[index]
      if (this.state.board[winCombo[0]] === this.state.board[winCombo[1]] && this.state.board[winCombo[1]] === this.state.board[winCombo[2]] && this.state.board[winCombo[2]] === 'X') {
        return 'X'
      }
      else if (this.state.board[winCombo[0]] === this.state.board[winCombo[1]] && this.state.board[winCombo[1]] === this.state.board[winCombo[2]] && this.state.board[winCombo[2]] === 'O') {
        return 'O'
      }
    }
  }

  isComplete () {
    return this.getWinner() || !this.state.board.includes(null) ? true : false
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
