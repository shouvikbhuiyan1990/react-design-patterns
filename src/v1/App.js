import React from 'react';

import Toggle from './Toggle';
import './App.css';

class App extends React.Component {
    onToggle = (e) => {
        console.log( `Toggle trigerred and the value of it is ${e}` );
    }
    render() {
        return (
            <div>
                <Toggle onToggle={this.onToggle}>
                    <h2>Instance 1</h2>
                    <Toggle.On>The button is on</Toggle.On>
                    <Toggle.Off>The button is off</Toggle.Off>
                    <Toggle.Button />
                </Toggle>
                <Toggle onToggle={this.onToggle}>
                    <h2>Instance 2</h2>
                    <Toggle.On>The button is on</Toggle.On>
                    <Toggle.Off>The button is off</Toggle.Off>
                    <Toggle.Button />
                </Toggle>
            </div>
        );
    }
}

export default App;
