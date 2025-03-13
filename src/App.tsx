import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NutLabel from './asset/NutLabel.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      // Header
          <div className="header">
              <h1 className="header">To Go Nutrition</h1><img src=" " className="header" height="60px" width="60px" alt="green apple speeding"/>
          </div>

      // Nutrition Label Side-Panel
          <div className="nutLabelPanel">
              <NutLabel></NutLabel>
          </div>
    </>
  )
}

export default App
