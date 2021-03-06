import React from 'react';
import Button,{ButtonType,ButtonSize}from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="customer">Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}><p>Hello</p></Button>
        <Button target="_blank" btnType={ButtonType.Link} href="https://www.bilibili.com/">Hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
