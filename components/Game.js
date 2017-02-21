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
    ev.preventDefault();
    this.setState({
        board: [null, null, null, null, null, null, null, null, null],
        turn: "X"
    })
  }

  updateBoard(i) {
    let newBoard = this.state.board;
    newBoard[i] = this.state.turn;
    return newBoard;
  }

  changeTurn() {
    return this.state.turn === "X" ? "O" : "X";
  }

  handleClick (i, ev) {
    ev.preventDefault();
    let newBoard = this.updateBoard(i);
    let nextTurn = this.changeTurn();

    this.setState({
      board: newBoard,
      turn: nextTurn
    });
  }

  getWinner () {
      const board = this.state.board;
      let winner;
      solutions.forEach(solution => {
          let isWinner = (board[solution[0]] !== null
                            && board[solution[0]] === board[solution[1]]
                            && board[solution[1]] === board[solution[2]]);

          if(isWinner) {
            winner = board[solution[0]];
          }
      });

      return winner;
  }

  isTie() {
    return !this.state.board.includes(null);
  }

  isComplete () {
    return (this.isTie() || this.getWinner());
  }

  render () {
    return (
      <div className="game">
          <Board board={this.state.board} onClick={this.handleClick} />
          <button className="game__reset" onClick={this.handleReset}>Reset</button>
          {this.isComplete() ? <Status winner={this.getWinner()}/> : null }
      </div>
    );
  }
}

module.exports = Game;
