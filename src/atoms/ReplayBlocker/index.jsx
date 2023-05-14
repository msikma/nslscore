// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import imgReplayBlocker from './replay-blocker.png'
import imgReplayBlockerNom from './replay-blocker-nom.png'
import imgReplayBlockerNsl from './replay-blocker-nsl.png'
import './index.css'

function ReplayBlocker({isVisible, type = null, className = ''}) {
  const types = {
    'nom': imgReplayBlockerNom,
    'nsl': imgReplayBlockerNsl,
    [null]: imgReplayBlocker
  }
  return (
    <div className={`ReplayBlocker ${!isVisible ? 'isHidden' : ''} ${className}`}>
      <img src={types[type] ?? types[null]} />
    </div>
  )
}

export default ReplayBlocker
