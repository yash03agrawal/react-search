import './App.css';
import Search from './components/Search';
import initialDetails from './data/data';

function App() {
  return (
    <div className="App">
      <div className="tc bg-green ma0 pa4 min-vh-100">
        <Search details={initialDetails} />
      </div>
    </div>
  );
}

export default App;
