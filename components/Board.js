const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {board.map((field, index) => {
          return <Field onClick={onClick.bind(field, index)} player={board[index]}/>
        }
      )}
      </div>
    );
  }
}

module.exports = Board;
