// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import imgReplayBlocker from './replay-blocker.png'
import imgReplayBlockerNom from './replay-blocker-nom.png'
import './index.css'

function ReplayBlocker({isVisible, isNom = true, className = ''}) {
  return (
    <div className={`ReplayBlocker ${!isVisible ? 'isHidden' : ''} ${className}`}>
      <img src={isNom ? imgReplayBlockerNom : imgReplayBlocker} />
    </div>
  )
}

export default ReplayBlocker
