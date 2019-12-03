import React, { useState, useEffect } from 'react'
import humidity from './humidity.png'
import temperature from './temperature.png'

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip
const SliderTooltip = createSliderWithTooltip(Slider)

const wrapperStyle = { width: 400, margin: 30 }

const predictHumidity = time => {
  const freq = 0.2843
  const phase = 2.54855
  const amplitude = -8.84653
  const mean = 68.5749
  
  return Math.floor((amplitude * Math.sin(freq * time + phase) + mean) * 100) / 100
}

const predictTemperature = time => {
  const freq = 0.307098 
  const phase = -0.7720
  const amplitude = -3.72685
  const mean = 6.00972
  
  return Math.floor(((amplitude * Math.sin(freq * time + phase) + mean) * 9/5 + 32) * 100) / 100
}

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

function Predict({times}) {
  const [time, setTime] = useState(0)

  const predictedTime = makeArr(0, 36, times.length)
  const predictedTemp = predictedTime.map(t => predictTemperature(t))
  const predictedHumidity = predictedTime.map(t => predictHumidity(t))

  return (
    <div className="predict">
      <h1>Predict the Weather</h1> 
      <div className="photo-container">
        <img src={humidity} />
        <img src={temperature} />
      </div>
      <p>Predict the weather for <em>{times[time].toTimeString()}</em></p>
      <div style={wrapperStyle}>
        <SliderTooltip
          min={0}
          max={times.length}
          tipFormatter={value => `${new Date(times[value]).toLocaleString()}`}
          onAfterChange={v => setTime(v)}
        /> 
      </div>
      <p>We predict the temperature to be <em>{predictedTemp[time]} F</em>, and the humidity to be <em>{predictedHumidity[time]}%</em></p>
    </div>
  )
}

export default Predict
