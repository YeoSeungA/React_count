import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CountA from './CountA';
import CountB from './CountB';
import CountC from './CountC';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
            <Link to='/countA'>
            <button>CountA</button>
            </Link>
            <Link to='/countB'>
            <button>CountB</button>
            </Link>
            <Link to='/countC'>
            <button>CountC</button>
            </Link>

            <Routes>
            <Route path="/countA" element={<CountA />}/>
            <Route path="/countB" element={<CountB />}/>
            <Route path="/countC" element={<CountC />}/>
            </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
