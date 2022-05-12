import img from './img/flag-ukraine_1f1fa-1f1e6.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World!
        </h1>
      <img src={img} className="flag" alt="flag" />
      </header>
    </div>
  );
}

export default App;
