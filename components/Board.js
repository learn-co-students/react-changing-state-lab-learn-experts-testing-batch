const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const displayBoard = board.map((token, i) => (
      <Field key={i} player={token} onClick={onClick.bind(null, i)} />
    ))
    return (
      <div className='board'>
        {displayBoard}
      </div>
    );
  }
}

module.exports = Board;
