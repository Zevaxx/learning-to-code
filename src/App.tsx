import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained">Hello World</Button>
      <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;