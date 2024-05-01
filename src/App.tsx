import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default App;
