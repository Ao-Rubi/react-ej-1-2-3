import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Mesaje from "./Mesaje";

function App() {
  
  const [msj, setMsj] = useState("")

  return (
    <div className="App">
        <Mesaje combo="My friend" msj={msj}></Mesaje>
        <Button variant="primary" type="button" onClick={()=>{ setMsj("(From changed state)") }}>hola</Button>
    </div>
  );
}

export default App;
