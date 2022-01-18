import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';
import React from 'react';

class App extends React.Component {
  state = {
    letters: [[0,0,3,0,0],["c","a",0,"b",0],["a","c","b","f","b"],[0,0,0,0,0],[0,8,0,0,0],["a","c","b","d","b"]]
  }

  render() { 
    return(
    <div class="content">
      <div class="guesses">
        <Guesses letters={this.state.letters} word="acbdb"/>
      </div>
      <Input />
    </div>
    );
  }
}
 
export default App;
