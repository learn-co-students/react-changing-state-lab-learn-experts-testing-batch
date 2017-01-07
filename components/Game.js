const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      turn: "X",
      count: 0
    }

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()

    this.setState({
      board: Array(9).fill(null),
      turn: "X",
      count: 0
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();

    this.setState( Object.assign({}, this.state, {
      board: this.state.board.fill(this.state.turn, i, i+1),
      turn: this.state.turn === 'X' ? 'O' : 'X',
      count: this.state.count + 1
      })
    )
    this.isComplete()

  }

  getWinner () {
    for(let i in solutions){
      let wCombo = solutions[i]

      if(this.state.board[wCombo[0]] === this.state.board[wCombo[1]] && this.state.board[wCombo[1]] === this.state.board[wCombo[2]]){
        return this.state.board[wCombo[0]]
        //ie the token
      }
    }
  }

  isComplete () {
    return (this.state.count ===  9 || this.getWinner())
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
          {this.isComplete() ? <Status winner={this.getWinner()}/> :null}
          <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}

module.exports = Game;
