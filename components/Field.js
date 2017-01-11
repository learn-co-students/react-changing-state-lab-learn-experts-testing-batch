const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    let isPlayer = player ? true : false
    return (
      <button disabled={isPlayer} className="field" onClick={onClick}>
        {player}
      </button>
    );
  }
}

module.exports = Field;
