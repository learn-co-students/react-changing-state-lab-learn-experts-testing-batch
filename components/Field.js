import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button className="field" onClick={onClick} disabled={!!player}>
          { player }
      </button>
    );
  }
}
