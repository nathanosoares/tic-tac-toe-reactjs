import React from 'react';
import Board from './components/board'

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Board />
      </div>
    );
  }
}

export default App;