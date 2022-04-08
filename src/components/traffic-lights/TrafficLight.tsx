import React from 'react';
import { LightColor } from '../../types';
import './TrafficLight.css';

interface TrafficLightProps {
  lightColor: LightColor;
}

const TrafficLight = ({ lightColor }: TrafficLightProps): JSX.Element => {
  return (
    <div className="trafficLight" style={{ backgroundColor: lightColor }}>
      {lightColor}
    </div>
  );
};

export default TrafficLight;
