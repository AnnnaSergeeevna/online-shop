import Shop from './shop'
import './index.css';
import Header from './Header';

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
