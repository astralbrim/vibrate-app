import logo from './logo.svg';
import './App.css';

const handleButton = () => {
  window.navigator.vibrate(200);
}


function App() {
  return (
    <div className="App">
      <button onClick={handleButton}>
        振動する
      </button>
    </div>
  );
}

export default App;
