const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const boardMap = board.map((token, i)=>(
      <Field key={i} player={token} onClick={this.props.onClick.bind(null, i)}/>
    ))
    return (
      <div className="board">
        {boardMap}
      </div>
    );
  }
}

module.exports = Board;
