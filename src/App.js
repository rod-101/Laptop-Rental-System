import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <p>Hey this is some changes I made</p>
    </div>
  );
}

function Home() {
    return (
        <div>
            <h1>Welcome to Lappify!</h1>
            <p>Lending and renting a laptop made easy.</p><br></br>
            
            <p>Choose what you want to do.</p>
            <button onClick={() => <Rent />}>Lend</button>
            <span>or</span>
            <button>Rent</button>
        </div>
    );
}

function Rent() {
    return (
        <div>
            <p>This is the rent page.</p>
        </div>
    );
}

export default App;
