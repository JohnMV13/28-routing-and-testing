import React, {Component} from 'react';
import uuid from 'uuid';

import GameCreate from '../game-create/create-index';
import list from '../game-list/list-index';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sales: [
        { _id: uuid(), title: 'Test Game', units: 30},
      ],
      error: null,
    };
  }

  handleAddUnits = (unit) => {
    if(!unit.title) {
      this.setState({error: 'Please put in Game Title'});
      return;
    }
    unit._id = uuid();
    unit.createdOn = new Date();
    this.setState(prevState => ({
      unit: [...prevState.unit, unit],
      error: null,
    }));
  }
  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>
        {this.state.error &&
          <div className='error'>{this.state.error}</div>}

        <GameCreate
          handleAddUnit={this.handleAddUnit}
          />

        {/* { this.renderUnitList() } */}
      </React.Fragment>
    );
  }

}