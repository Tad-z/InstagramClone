import { useState } from 'react';
import './App.css';
import { Nav, Bio, Gallery } from './components';


const App = () => {
  const [color, setColor] = useState(false)
  return (
    <div className={`${color ? "main-dark" : "main"} body-color`}>
      <Nav color={color} />
      <div className={`${color ? "container-dark" : "container"}`}>
        <Bio color={color} setColor={setColor} />
        <Gallery color={color} setColor={setColor} />
      </div>
    </div>

  )



}

export default App;
