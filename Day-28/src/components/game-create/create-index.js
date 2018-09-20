import React, {Component} from 'react';

const defaultState = {
  game: '',
  unitsSold: 0,
}

export default class GameCreate extends Component {
  constructor(props){
    super(props);

    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddUnit(this.state);
    this.state(defaultState);
  }

  handleChange = (event) => {
    const {name, value, type} = event.target;

    this.setState({
      [name]: type === 'number' ? +value : value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          type="number"
          name="units"
          step=".5"
          placeholder="units"
          value={this.state.units}
          onChange={this.handleChange}
          />
        <button type="submit">Create Units Sold</button>
      </form>
    );
  }
}