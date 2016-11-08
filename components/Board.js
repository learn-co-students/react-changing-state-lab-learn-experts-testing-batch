const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const myBoard = board.map((token, i)=> (
      <Field key={i} onClick={onClick.bind(null, i)} player={token} />
    ))
    return (
      <div className='board'>
        {myBoard}
      </div>
    );
  }
}

module.exports = Board;
