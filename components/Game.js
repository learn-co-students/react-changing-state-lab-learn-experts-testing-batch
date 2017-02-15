const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: 'X',
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board;
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn;
    this.setState({
      board, turn
    })
    const changeTurn = (turn == 'X' ? 'O' : 'X');
    this.setState({
      turn: changeTurn,
    })

  }

  getWinner () {
    const results = solutions.map(
        (solution) => solution.map((i) => this.state.board[i]).join('')
      );
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    );
    return row && row[0]
  }

  isComplete () {
    return this.state.board.every((field) => field)
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
      </div>
    );
  }
}

module.exports = Game;
