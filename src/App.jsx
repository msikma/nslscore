// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import {useScoreboardState} from './state/app-state'
import ControlPanel from './components/ControlPanel'
import Scoreboard from './components/Scoreboard'
import Debugger from './atoms/Debugger'
import './App.css'

function App() {
  const [appState, appInterface] = useScoreboardState(true)

  return (
    <div className={`App ${appState.isDebugging ? 'is-debugging' : ''}`}>
      <ControlPanel appState={appState} appInterface={appInterface} className="AppItem AppControlPanel" />
      <Scoreboard appState={appState} className="AppItem AppScoreboard" />
      <Debugger appState={appState} isVisible={appState.isDebugging} className="AppItem AppDebugger" />
    </div>
  )
}

export default App
