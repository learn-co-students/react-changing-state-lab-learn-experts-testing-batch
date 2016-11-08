const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    let newState = Object.assign({}, this.state, {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
    this.setState(newState)
  }

  handleClick (i, ev) {
    ev.preventDefault()
    let newState;

    newState = Object.assign({}, this.state,{
      board: this.state.board.slice(0, i).concat(this.state.turn).concat(this.state.board.slice(i+1, this.state.board.length)),
      turn: this.state.turn === 'X' ? 'O' : 'X'
    })

    this.setState(newState)
    this.isComplete()
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
    let turnCount = 0
    this.state.board.forEach((token) => {
      if (token !== null) {
        turnCount += 1
      }
    })
    if (turnCount === 9) {
      return true
    }
    else {
      return false
    }
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}

module.exports = Game;
