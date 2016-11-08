const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null,null,null,null,null,null,null,null,null],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeBoardState = this.changeBoardState.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null,null,null,null,null,null,null,null,null],
      turn: "X"
    })
  }

  changeBoardState(i){
    var array = this.state.board;
    if(this.state.turn === "X"){
      array.splice(i, 1, "X");
    } else {
      array.splice(i, 1, "O")
    }
    return array;
  }

  handleClick (i, ev) {
    ev.preventDefault();
    if(this.state.turn === "X"){
      this.setState({
        board: this.changeBoardState(i),
        turn: "O"
      })
    } else {
      this.setState({
        board: this.changeBoardState(i),
        turn: "X"
      })
    }
    this.isComplete();
  }

  getWinner () {
    for(var i = 0; i < solutions.length; i++){
      var winCombo1 = this.state.board[solutions[i][0]];
      var winCombo2 = this.state.board[solutions[i][1]];
      var winCombo3 = this.state.board[solutions[i][2]];

      if(winCombo1 === "X" && winCombo2 === "X" && winCombo3 === "X"){
        return 'X';
      }
      else if(winCombo1 === "O" && winCombo2 === "O" && winCombo3 === "O"){
        return "O";
      }
    }
  }

  isComplete () {
    if(this.state.board.includes(null)){
      return false;
    } else {
      return true;
    }
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
