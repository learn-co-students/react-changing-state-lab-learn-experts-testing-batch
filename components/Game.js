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
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }

  updateBoard(index){
    var board = [...this.state.board];
    board[index] = this.state.turn;
    this.setState({board: board});
  }

  updatePlayer(){
    if(this.state.turn === "X"){
      this.setState({turn: "O"});
    } else {
      this.setState({turn: "X"});
    }
  }

  handleClick (i, ev) {
    ev.preventDefault();
    this.updateBoard(i);
    this.updatePlayer();
  }

  getWinner () {
    var board = this.state.board;
    var winner;
    solutions.forEach(function(winCombo){
      var winCombo1 = board[winCombo[0]];
      var winCombo2 = board[winCombo[1]];
      var winCombo3 = board[winCombo[2]];

      if(winCombo1 === winCombo2 && winCombo2 === winCombo3){
        winner = winCombo1;
      }
    })

    return winner;
  }

  getTie(){
    return !(this.state.board.includes(null))
  }

  isComplete () {
    return (this.getTie() || this.getWinner())
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
