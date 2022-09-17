import Button from "@mui/material/Button";
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Button variant="contained">Hello World</Button>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </>
  );
}

export default App;