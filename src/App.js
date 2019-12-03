// @flow

import React, { useState, useEffect } from 'react'
import { csv } from 'd3'
import Plot from 'react-plotly.js'
import data from './data/processed.csv'
import Tooltip from 'rc-tooltip'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import './App.css'

import Predict from './Predict'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
const Handle = Slider.Handle

const wrapperStyle = { width: 400, margin: 50 }

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

const predictTemperature = time => {
  const freq = 0.307098 
  const phase = -0.7720
  const amplitude = -3.72685
  const mean = 6.00972
  
  return Math.floor(((amplitude * Math.sin(freq * time + phase) + mean) * 9/5 + 32) * 100) / 100
  
}

function App() {
  const [{x, yTemp, yHumidity, defaultStart, defaultEnd, min, max}, setData] = useState({})
  const [range, setRange] = useState([0, 0])

  useEffect(() => {
    csv(data).then(data => {

      const x = data.map(row => new Date(row.time * 1000))
      const yTemp = data.map(row => row.temperature * 9/5  + 32)
      const yHumidity = data.map(row => row.humidity)

      const min = 0 
      const max = x.length - 1

      const defaultStart = min
      const defaultEnd = max

      setData({x, yTemp, yHumidity, defaultStart, defaultEnd, min, max})
      setRange([defaultStart, defaultEnd])
    })
  }, [])

  if (!x) {
    return null
  }

  const time = x.slice(range[0], range[1])
  const predictedTime = makeArr(0, 36, x.length)
  const predicted = predictedTime.map(t => predictTemperature(t))

  return (
    <div className="App">
      <div className="weather-station">
        <h1>Weather Station</h1>
        <Plot 
          data={[
            {
              x: x.slice(range[0], range[1]),
              y: yTemp.slice(range[0], range[1]),
              name: 'temperature'
            },
            {
              x: x.slice(range[0], range[1]),
              y: yHumidity.slice(range[0], range[1]),
              name: 'humidity'
            }
          ]}
          layout={{title: 'Temperature vs Time'}}
        />
        <p>Show me the weather from <em>{new Date(x[range[0]]).toLocaleString()}</em> to <em>{new Date(x[range[1]]).toLocaleString()}</em></p>
        <div style={wrapperStyle}>
          <Range
            min={min}
            max={max}
            defaultValue={[defaultStart, defaultEnd]}
            tipFormatter={value => `${new Date(x[value])}`}
            onAfterChange={v => setRange(v)}
          />
        </div>
      </div>
      <Predict
        times={x}
      />
    </div>
  )
}

export default App
