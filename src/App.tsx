import './App.css'
import Container from './components/Container'
import audi from "./assets/audi.jpeg";
import lambo from "./assets/aventador.jpeg";
import jeep from "./assets/jeep defender.jpeg";
import { useState } from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";




function App() {

  const [container1, showContainer1] = useState(true);
  const [container2, showContainer2] = useState(false);
  const [container3, showContainer3] = useState(false);

  return (
    <div className='app'>
      {container1 && (
        <Container
          header='Audi R8'
          text='The Audi R8 embodies elegance and speed, offering a thrilling driving experience.'
          image={audi}
          show={true}
        />
      )}
      
      {container2 && (
        <Container
          header='Lamborghini Aventador'
          text='The Lamborghini Aventador is an automotive masterpiece, blending exquisite design with blistering performance. '
          image={lambo}
          show={true}
        />
      )}
      
      {container3 && (
        <Container
          header='Jeep Defender'
          text='The Jeep Defender, a rugged off-road marvel, embodies adventure and durability in its iconic design.'
          image={jeep}
          show={true}
        />
      )}
      <div className="btn_group">
        <div className='one'><IoChevronBackOutline /></div>
        <div className='two'><IoChevronForwardOutline /></div>
      </div>
    </div>
  )
}

export default App
