// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import './index.css'
import iconTerran from './terran.png'
import iconProtoss from './protoss.png'
import iconZerg from './zerg.png'
import iconUnknown from './unknown.png'
import iconRandom from './random.png'

function RaceIcon({raceCode, raceLabel, className = ''}) {
  const matcher = {
    t: iconTerran,
    p: iconProtoss,
    z: iconZerg,
    unknown: iconUnknown,
    random: iconRandom,
  }
  const icon = matcher[raceCode] ?? matcher.unknown
  return (
    <div className={`RaceIcon icon-${raceCode} ${className}`}>
      <span className="icon-inner" style={{backgroundImage: `url('${icon}')`}}></span>
      <span className="icon-label">{raceLabel}</span>
    </div>
  )
}

export default RaceIcon
