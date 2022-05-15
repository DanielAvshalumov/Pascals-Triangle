import {useEffect, useState} from "react"
import Header from "./components/Header"
import Triangle from "./components/Triangle"

function App() {
  const [height, setHeight] = useState(0);
  const [details, setDetails] = useState([{}])
  function handleChange(event) {
    if(isNaN(event.target.value)) {
      alert("not a number numnuts!");
      event.target.value = "";
    } else {
      setHeight(event.target.value);
    }
  }
  return ( 
    <div>
      <Header
      handleInput={handleChange} />
      <div>
        <Triangle
        height={height} />
      </div>
    </div>
  );
}

export default App;
