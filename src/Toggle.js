import React from 'react';

import Switch from './switch';
import './App.css';

class Toggle extends React.Component {
  state = {
    on: true
  }

  onToggleClick = () => {
    this.setState(
      ({on}) => ( { on: !on} ),
      () => {
        this.props.onToggle(this.state.on);
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Switch on={this.state.on} onClick={this.onToggleClick}/>
      </div>
    );
  }
}

export default Toggle;
