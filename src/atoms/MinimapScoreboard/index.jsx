// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import RaceIcon from '../RaceIcon'
import backdropTeams from './minimap-teams.png'
import backdropNoTeams from './minimap-no-teams.png'
import './index.css'

const d = (val, defaultVal = '—') => `${String(val).trim() ? val : defaultVal}`

function MinimapScoreboard({appState, isVisible, className = ''}) {
  const matchNumber = Math.max(Number(appState.score.A), 0) + Math.max(Number(appState.score.B), 0) + 1;
  const useTeams = ![appState.playerA.team, appState.playerB.team].every(n => n === '')
  return (
    <div className={`MinimapScoreboard style-nsl6 ${useTeams ? 'use-teams' : 'no-teams'} ${!isVisible ? 'isHidden' : ''} ${className}`}>
      <img className="backdrop teams" src={backdropTeams} width="644" height="252" />
      <img className="backdrop no-teams" src={backdropNoTeams} width="644" height="222" />
      <div className="positioner">
        <div className="inner">
          <div className="title">
            <span className="tournament">{d(appState.tournamentName)}</span>
            <span className="match">Match {d(Math.max(matchNumber, 1), 1)}</span>
            <span className="map">{d(appState.mapName)}</span>
          </div>
          <div className="scoreboard best-of">
            <div className="player a"><span>{d(appState.playerA.name)}</span></div>
            <div className="points">
              <div className="score a">{d(appState.score.A, 0)}</div>
              <div className="score div">{'-'}</div>
              <div className="score b">{d(appState.score.B, 0)}</div>
            </div>
            <div className="player b"><span>{d(appState.playerB.name)}</span></div>
          </div>
          <div className="teams">
            <div className="team a">{d(appState.playerA.team)}</div>
            <div className="team b">{d(appState.playerB.team)}</div>
          </div>
          <div className="races">
            <div className="race a">
              <svg view-box="0 0 95 35">
                <polygon className="polygon-bg" points="0.5,34.5 0.5,0.5 92.1,0.5 69.7,34.5"></polygon>
                <path className="polygon-border" d="M91.1,1L69.5,34H1V1H91.1 M93,0H0v35h70L93,0L93,0z"></path>
              </svg>
              <span className="block">
                <RaceIcon raceCode={d(appState.playerA.race, 'unknown')} raceLabel={d(appState.playerA.race.toUpperCase().slice(0, 1), '?')} />
              </span>
            </div>
            <div className="race b">
              <svg view-box="0 0 100 35">
                <polygon className="polygon-bg" points="26.3,34.5 3.9,0.5 99.5,0.5 99.5,34.5 	"></polygon>
                <path className="polygon-border" d="M99,1v33H26.5L4.9,1H99 M100,0H3l23,35h74V0L100,0z"></path>
              </svg>
              <span className="block">
                <RaceIcon raceCode={d(appState.playerB.race, 'unknown')} raceLabel={d(appState.playerB.race.toUpperCase().slice(0, 1), '?')} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinimapScoreboard
