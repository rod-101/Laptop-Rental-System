import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

function Home() {
    return (
        <div>
            <h1>Welcome to Lappify!</h1>
            <p>Lending and renting a laptop made easy.</p><br></br>
            
            <p>Choose what you want to do.</p>
            <button>Lend</button><span>or</span><button>Rent</button>
        </div>
    );
}

export default App;
