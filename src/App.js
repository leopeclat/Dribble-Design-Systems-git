import logo from './logo.svg';
import './App.css';
import Card from './lib/components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Please find below the card component with a button component inside it
        </p>
        <Card headline="App DB Streckenagent" text="Ihr zuverlässiger Reisebegleiter - Kostenlos werden Sie topaktuell über Störungen, Verspätungen, Gleiswechsel, Baustellen und Zugausfälle im Nah- und Fernverkehr auf Ihren Strecken aufgeklärt." />

      </header>
    </div>
  );
}

export default App;
