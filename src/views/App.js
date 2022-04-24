import logo from "../views/logo.svg";
import "../views/App.scss";
// import Session1 from '../components/session1';
// import Session2 from '../components/session2';
import Session3 from "../components/session3";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Session3 />
      </header>
    </div>
  );
}

export default App;
