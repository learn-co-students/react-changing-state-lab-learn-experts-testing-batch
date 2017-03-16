const React = require('react');

class Field extends React.Component {

  shouldComponentUpdate(nextProps){
    return !!nextProps.player
  }

  render () {
    const { player, onClick } = this.props;
    return (
      <button onClick={onClick} className="field" disabled={!!player}>
        {player}
      </button>
    );
  }
}

module.exports = Field;
