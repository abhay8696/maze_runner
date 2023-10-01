import './App.css';
import Maze from './components/maze';
import Algorithm from './components/algorithm';

function App() {
  return (
    <div className="App">
      <section className='landingSection' id='landingSection'>
        <header className="App-header">
          <h1>Rescursive Maze Runner</h1>
        </header>
        <Maze />
      </section>
      <Algorithm/>
    </div>
  );
}

export default App;
