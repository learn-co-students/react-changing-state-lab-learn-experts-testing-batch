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
      board: [null, null, null, null, null, null, null, null, null]
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
    let board = this.state.board
    let winner = undefined
    solutions.forEach(solution => {
      if(board[solution[0]] === board[solution[1]] && board[solution[1]] === board[solution[2]] && board[solution[0]] !== null){
        winner = board[solution[0]]
      }
    })
    return winner
  }

  isComplete () {
    return this.getWinner() || !this.state.board.includes(null) ? true : false
  }

  render () {
    return (
      <div className ="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : ""}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
