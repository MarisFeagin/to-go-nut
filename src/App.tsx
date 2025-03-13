
import NutLabel from './assets/NutLabel.tsx'
import './App.css'

function App() {

  return (
    <>

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
