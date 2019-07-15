import React from 'react';

import Toggle from './Toggle';
import './App.css';

class App extends React.Component {
    onToggle = (e) => {
        console.log( `Toggle trigerred and the value of it is ${e}` );
    }
    render() {
        return (
            <Toggle onToggle={this.onToggle}/>
        );
    }
}

export default App;
