import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Энэрэл <code>эмнэлгийн </code> веб сайт.
        </p>
        <a
          className="App-link"
          href="https://enerel.ub.gov.mn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Эмнэлгийн холбоос 
        </a>
      </header>
    </div>
  );
}

export default App;
