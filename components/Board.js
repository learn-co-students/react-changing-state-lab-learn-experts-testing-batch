const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        <Field onClick={this.props.onClick.bind(null, 0)}/>
        <Field onClick={this.props.onClick.bind(null, 1)} />
        <Field onClick={this.props.onClick.bind(null, 2)} />
        <Field onClick={this.props.onClick.bind(null, 3)} />
        <Field onClick={this.props.onClick.bind(null, 4)} />
        <Field onClick={this.props.onClick.bind(null, 5)} />
        <Field onClick={this.props.onClick.bind(null, 6)} />
        <Field onClick={this.props.onClick.bind(null, 7)} />
        <Field onClick={this.props.onClick.bind(null, 8)} />
      </div>
    );
  }
}

module.exports = Board;
