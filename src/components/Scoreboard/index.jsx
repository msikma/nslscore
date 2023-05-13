// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import ReplayBlocker from '../../atoms/ReplayBlocker'
import MinimapScoreboard from '../../atoms/MinimapScoreboard'
import imgBackground from './debug-background.jpg'
import './index.css'

function Scoreboard({appState, className = ''}) {
  const hasVisibleScoreboard = appState.visibility.scoreboard
  const hasVisibleReplayBlocker = appState.visibility.replayBlocker
  const hasBackground = appState.isDebugging

  return (
    <div className={`Scoreboard ${className}`}>
      {hasBackground && <img src={imgBackground} width="1920" height="1080" className="background" />}
      <MinimapScoreboard appState={appState} isVisible={hasVisibleScoreboard} className="ScoreboardMinimap" />
      <ReplayBlocker isVisible={hasVisibleReplayBlocker} className="ScoreboardReplayBlocker" />
    </div>
  )
}

export default Scoreboard
