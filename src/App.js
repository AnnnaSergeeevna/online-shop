import Shop from './Shop.js';
import Header from './Header';
import classes from './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='body'>
          <Header />
          <Shop />
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
