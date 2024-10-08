// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import imgReplayBlocker from './replay-blocker.png'
import imgReplayBlockerNom from './replay-blocker-nom.png'
import imgReplayBlockerNsl from './replay-blocker-nsl.png'
import imgReplayBlockerCpl10 from './replay-blocker-cpl10.png'
import imgReplayBlockerCpl11 from './replay-blocker-cpl11.png'
import './index.css'

function ReplayBlocker({isVisible, type = null, className = ''}) {
  const types = {
    'nom': imgReplayBlockerNom,
    'nsl': imgReplayBlockerNsl,
    'cpl10': imgReplayBlockerCpl10,
    'cpl11': imgReplayBlockerCpl11,
    [null]: imgReplayBlocker
  }
  return (
    <div className={`ReplayBlocker ${!isVisible ? 'isHidden' : ''} ${className}`}>
      <img src={types[type] ?? types[null]} />
    </div>
  )
}

export default ReplayBlocker
