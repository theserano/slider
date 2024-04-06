import './App.css';
import { useRef, useState } from 'react';
import audi from "./assets/audi.jpeg";
import lambo from "./assets/aventador.jpeg";
import jeep from "./assets/jeep defender.jpeg";
import alpha from "./assets/alpha.jpeg";
import rolls from "./assets/rolls.jpeg";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import Container from './components/Container';


function App() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [audi, lambo, jeep, alpha, rolls];
  const forwardRef = useRef(null);
  const backwardRef = useRef(null);

  const handleSlide = (direction: string) => {
    let newTab;
    if (direction === 'forward') {
      newTab = activeTab === tabs.length ? 1 : activeTab + 1;
    } else {
      newTab = activeTab === 1 ? tabs.length : activeTab - 1;
    }
    setActiveTab(newTab);
  }

  return (
    <div className='app'>
      <p>Please open on a larger screen.<br /> (preferably a laptop)</p>
      {activeTab === 1 && (
        <Container
          header='Audi R8'
          text='The Audi R8 embodies elegance and speed, offering a thrilling driving experience.'
          image={audi}
        />
      )}
      
      {activeTab === 2 && (
        <Container
          header='Lamborghini Aventador'
          text='The Lamborghini Aventador is an automotive masterpiece, blending exquisite design with blistering performance. '
          image={lambo}
        />
      )}
      
      {activeTab === 3 && (
        <Container
          header='Jeep Defender'
          text='The Jeep Defender, a rugged off-road marvel, embodies adventure and durability in its iconic design.'
          image={jeep}
        />
      )}
      {activeTab === 4 && (
        <Container
          header='Alpha Romeo 4C'
          text='It is a two-seater, mid-engined sports car. It is a two-seater, mid-engined sports car'
          image={alpha}
        />
      )}
      {activeTab === 5 && (
        <Container
          header='Rolls-Royce Ghost'
          text='This is a luxury sedan known for its spacious interior, powerful engine, and smooth ride.'
          image={rolls}
        />
      )}
      <div className="btn_group">
        <span ref={backwardRef} onClick={() => handleSlide('backward')} className='one'><IoChevronBackOutline /></span>
        <span ref={forwardRef} onClick={() => handleSlide('forward')} className='two'><IoChevronForwardOutline /></span>
      </div>
    </div>
  );
}

export default App;
