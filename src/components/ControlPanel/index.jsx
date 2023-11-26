// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import './index.css'

function PlayerBox({label, name, team, race, score, callbackName, callbackTeam, callbackRace, callbackScoreMinus, callbackScorePlus}) {
  const races = [['t', 'p', 'z'], ['unknown', 'random']]
  return (
    <div className={`FormBox PlayerBox race-${race}`}>
      <div className="BoxLabel">
        <div className="container">
          <p>{label}:</p>
        </div>
      </div>
      <div className="LabelBox">
        <label>Name</label>
        <input type="text" value={name} onChange={callbackName} />
      </div>
      <div className="RaceSelector">
        <label>Race</label>
        <div className="container">
          {races.map((raceGroup, n) => (
            <div>
              {
                raceGroup.map((raceLetter, m) => (
                  <button
                    key={`${n}_${m}`}
                    onClick={callbackRace(raceLetter)}
                    className={[race === raceLetter ? 'active' : '', `race-${raceLetter}`].join(' ')}
                  >
                    {raceLetter.slice(0, 1).toUpperCase()}
                  </button>
                ))
              }
            </div>
          ))}
        </div>
      </div>
      <div className="LabelBox">
        <label>Team</label>
        <input type="text" value={team} onChange={callbackTeam} />
      </div>
      <div className="NumberInput">
        <label>Score</label>
        <div className="container">
          <button onClick={callbackScoreMinus}>-</button>
          <input type="text" value={score} onChange={callbackName} />
          <button onClick={callbackScorePlus}>+</button>
        </div>
      </div>
    </div>
  )
}

function GeneralBox(data) {
  const {
    isDebugging,
    knownMaps,
    label,
    mapName,
    visibility,
    roundName,
    replayBlockerType,

    callbackAddMap,
    callbackDebugging,
    callbackMapName,
    callbackRemoveMap,
    callbackResetScores,
    callbackSetReplayBlockerType,
    callbackToggleReplayBlocker,
    callbackToggleScoreboard,
    callbackToggleScoreboardBackground,
    callbackRoundName
  } = data
  return (
    <div className={`FormBox`}>
      <div className="BoxLabel center">
        <div className="container">
          <p>{label}:</p>
        </div>
      </div>
      <div className="rows">
        <div className="LabelBox top tournament-picker">
          <label>Round name</label>
          <input type="text" value={roundName} onChange={callbackRoundName} />
        </div>
        <div className="LabelBox top">
          <div className="rows">
            <div>
              <label>Map</label>
              <input type="text" value={mapName} onChange={callbackMapName} />
              <button onClick={callbackAddMap}>💾</button>
              <button onClick={_ => callbackRemoveMap(mapName)}>❌</button>
            </div>
            <div className="maps">
              {knownMaps.map(map => (
                <span className={`mapWrapper ${mapName === map ? 'active' : ''}`} key={`map_${map}`}>
                  <button className="map" onClick={callbackMapName} value={map}>{map}</button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cols">
        <div className="LabelBox top">
          <label>Interface</label>
          <button onClick={callbackToggleScoreboard} className={visibility.scoreboard ? 'active' : ''}>Toggle scoreboard</button>
          <button onClick={callbackToggleScoreboardBackground} className={visibility.scoreboardBackground ? 'active' : ''}>BG</button>
        </div>
        <div className="LabelBox top">
          <button onClick={callbackToggleReplayBlocker} className={visibility.replayBlocker ? 'active' : ''}>Toggle replay blocker</button>
          <button onClick={ev => callbackSetReplayBlockerType(replayBlockerType == null ? 'cpl10' : null)} className={replayBlockerType == null ? 'active' : ''}>Plain</button>
        </div>
      </div>
      <div className="cols">
        <div className="LabelBox top">
          <label>Etc.</label>
          <button onClick={callbackResetScores}>Reset matches</button>
          <button onClick={callbackDebugging} className={isDebugging ? 'active' : ''}>Toggle debug</button>
        </div>
      </div>
    </div>
  )
}

function ControlPanel({appState, appInterface, className = ''}) {
  const {
    setRoundName,
    setReplayBlockerType,
    setMapName,
    setKnownMaps,
    setDebugging,
    setVisibility,
    setPlayerName,
    setPlayerTeam,
    setPlayerRace,
    setPlayerScore,
    setPlayerScoreZero
  } = appInterface
  const callbackName = playerN => ev => setPlayerName(playerN, ev.target.value)
  const callbackTeam = playerN => ev => setPlayerTeam(playerN, ev.target.value)
  const callbackRace = playerN => raceN => _ => setPlayerRace(playerN, raceN)
  const callbackScore = playerN => n => _ => setPlayerScore(playerN, appState.score[playerN] + n)
  const callbackAddMap = mapName => mapName && setKnownMaps([...new Set([...appState.knownMaps, mapName])])
  const callbackRemoveMap = mapName => setKnownMaps([...new Set([...appState.knownMaps.filter(item => item !== mapName)])])
  const callbackToggleReplayBlocker = () => setVisibility('replayBlocker')(!appState.visibility.replayBlocker)
  const callbackToggleScoreboard = () => setVisibility('scoreboard')(!appState.visibility.scoreboard)
  const callbackToggleScoreboardBackground = () => setVisibility('scoreboardBackground')(!appState.visibility.scoreboardBackground)
  const players = ['A', 'B']
  return (
    <div className={`ControlPanel ${className ?? ''}`}>
      <div className="Row Players">
        {players.map(playerN => (
          <PlayerBox
            key={`player${playerN}`}
            label={`Player ${playerN}`}
            name={appState[`player${playerN}`].name}
            team={appState[`player${playerN}`].team}
            race={appState[`player${playerN}`].race}
            score={appState.score[playerN]}
            callbackScoreMinus={callbackScore(playerN)(-1)}
            callbackScorePlus={callbackScore(playerN)(1)}
            callbackName={callbackName(playerN)}
            callbackTeam={callbackTeam(playerN)}
            callbackRace={callbackRace(playerN)}
          />
        ))}
      </div>
      <div className="Row Other">
        <GeneralBox
          label={`Options`}
          roundName={appState.roundName}
          mapName={appState.mapName}
          knownMaps={appState.knownMaps}
          visibility={appState.visibility}
          isDebugging={appState.isDebugging}
          replayBlockerType={appState.replayBlockerType}
          callbackSetReplayBlockerType={setReplayBlockerType}
          callbackToggleReplayBlocker={callbackToggleReplayBlocker}
          callbackToggleScoreboard={callbackToggleScoreboard}
          callbackToggleScoreboardBackground={callbackToggleScoreboardBackground}
          callbackRemoveMap={callbackRemoveMap}
          callbackAddMap={_ => callbackAddMap(appState.mapName)}
          callbackDebugging={_ => setDebugging(!appState.isDebugging)}
          callbackMapName={ev => setMapName(ev.target.value)}
          callbackResetScores={_ => setPlayerScoreZero()}
          callbackRoundName={ev => setRoundName(ev.target.value)}
        />
      </div>
    </div>
  )
}

export default ControlPanel
