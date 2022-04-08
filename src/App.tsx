import React, { useEffect, useState } from 'react';
import './App.css';
import TrafficLight from './components/traffic-lights/TrafficLight';
import { LightColor } from './types';

function App(): JSX.Element {
  const [currentColor, setCurrentColor] = useState<LightColor>('green');

  const durationByColor = {
    red: 3000,
    yellow: 1000,
    green: 4000,
  };

  const nextColor = {
    red: 'green' as LightColor,
    yellow: 'red' as LightColor,
    green: 'yellow' as LightColor,
  };

  const changeToColorAfterTime = () => {
    setTimeout(() => {
      setCurrentColor(nextColor[currentColor]);
    }, durationByColor[currentColor]);
  };

  useEffect(() => {
    changeToColorAfterTime();
  }, [currentColor]);

  return (
    <div className="App">
      <TrafficLight lightColor={currentColor} />
    </div>
  );
}

export default App;
