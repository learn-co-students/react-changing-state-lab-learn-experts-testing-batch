const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <div className='status'>
        {(winner == 'X') ? 'X wins' : (winner == 'O' ? 'O wins' : 'Tie')}
      </div>
    );
  }
}

module.exports = Status;
