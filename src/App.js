import './App.css';
import './litElements/hello-world';
import './litElements/count-element'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hello-world />
        <count-element />
        <br />
      </header>
    </div>
  );
}

export default App;
