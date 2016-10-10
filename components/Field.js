const React = require('react');

class Field extends React.Component {

  render () {
    const { player, onClick, index } = this.props;
    return (
      <button className='field' onClick={onClick} disabled={player ? true : false}>
        {player}
      </button>
    );
  }
}

module.exports = Field;
