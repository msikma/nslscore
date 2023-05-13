// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import './index.css'
import iconTerran from './Race - Terran.png'
import iconProtoss from './Race - Protoss.png'
import iconZerg from './Race - Zerg.png'
import iconUnknown from './Race - Unknown.png'
import iconRandom from './Race - Random.png'

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
