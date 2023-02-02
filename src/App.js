import logo from './logo.svg';
import './App.css';

function Button() {
  return (
    <button>
      Button
    </button>
  );
}
function App() {
  const name = "Manav Patel"
  return (
    <div className="App">
      <h1>Hello, {name} !!!</h1>
      <Button /> 
    </div>
  );
}

export default App;
