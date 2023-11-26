// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import {useState} from 'react'

export function useScoreboardState(setInitialValues = true, setDebugValues = false) {
  const initialState = {
    playerA: {
      name: '',
      team: '',
      race: ''
    },
    playerB: {
      name: '',
      team: '',
      race: ''
    },
    score: {
      A: 0,
      B: 0
    },
    visibility: {
      scoreboard: true,
      scoreboardBackground: true,
      replayBlocker: false
    },
    useScore: true,
    replayBlockerType: null,
    isDebugging: false,
    mapName: '',
    knownMaps: [],
    tournamentName: '',
    roundName: ''
  }
  const [appState, setAppState] = useState(initialState)

  const setInitialData = () => {
    setAppState({
      ...appState,
      playerA: {
        ...appState.playerA,
        name: 'Player A',
        team: '',
      },
      playerB: {
        ...appState.playerB,
        name: 'Player B',
        team: ''
      },
      visibility: {
        scoreboard: true,
        scoreboardBackground: true,
        replayBlocker: true
      },
      useScore: true,
      replayBlockerType: null, // 'cpl10'
      isDebugging: false,
      mapName: 'Tempest',
      knownMaps: ['Tempest', 'Vermeer', 'Invader', 'Retro', 'Apocalypse', 'Neo Dark Origin'],
      tournamentName: 'CPL 10',
      roundName: 'Week 1',
      __setInitialValues: true
    })
  }

  const setDebugData = () => {
    setAppState({
      ...appState,
      playerA: {
        name: 'Dada',
        team: 'Cry Me a Reaver',
        race: 'z'
      },
      playerB: {
        name: 'Airn',
        team: 'Fightin\' Aiurish',
        race: 'p'
      },
      score: {
        A: 2,
        B: 2
      },
      visibility: {
        scoreboard: true,
        scoreboardBackground: true,
        replayBlocker: true
      },
      isDebugging: true,
      mapName: 'Retro',
      knownMaps: ['Retro', 'Paradiso', 'Neverland', 'Sand Storm', 'Tempest', 'Heartbreak Ridge', '76', 'Dark Origin', 'Lights Out', 'Rush Hour Neo'],
      tournamentName: 'NSL Season 6',
      __setDebugValues: true
    })
  }

  if (setDebugValues && !appState.__setDebugValues) {
    setDebugData()
  }

  if (setInitialValues && !appState.__setInitialValues) {
    setInitialData()
  }

  const setTournamentName = name => {
    setAppState({
      ...appState,
      tournamentName: name
    })
  }

  const setRoundName = name => {
    setAppState({
      ...appState,
      roundName: name
    })
  }

  const setMapName = name => {
    setAppState({
      ...appState,
      mapName: name
    })
  }

  const setKnownMaps = maps => {
    setAppState({
      ...appState,
      knownMaps: [...maps]
    })
  }

  const setPlayerName = (playerN, name) => {
    setAppState({
      ...appState,
      [`player${playerN}`]: {
        ...appState[`player${playerN}`],
        name
      }
    })
  }

  const setPlayerTeam = (playerN, team) => {
    setAppState({
      ...appState,
      [`player${playerN}`]: {
        ...appState[`player${playerN}`],
        team
      }
    })
  }

  const setPlayerRace = (playerN, race) => {
    setAppState({
      ...appState,
      [`player${playerN}`]: {
        ...appState[`player${playerN}`],
        race
      }
    })
  }

  const setPlayerScore = (playerN, score) => {
    setAppState({
      ...appState,
      score: {
        ...appState.score,
        [playerN]: Math.max(score, 0)
      }
    })
  }

  const setPlayerScoreZero = () => {
    setAppState({
      ...appState,
      score: {
        A: 0,
        B: 0
      }
    })
  }

  const setDebugging = value => {
    setAppState({
      ...appState,
      isDebugging: value
    })
  }

  const setVisibility = item => value => {
    setAppState({
      ...appState,
      visibility: {
        ...appState.visibility,
        [item]: value
      }
    })
  }

  const setReplayBlockerType = type => {
    setAppState({
      ...appState,
      replayBlockerType: type
    })
  }

  return [
    appState,
    {
      setInitialData,
      setDebugData,
      setTournamentName,
      setRoundName,
      setPlayerScoreZero,
      setMapName,
      setKnownMaps,
      setDebugging,
      setVisibility,
      setReplayBlockerType,
      setPlayerName,
      setPlayerTeam,
      setPlayerRace,
      setPlayerScore
    }
  ]
}
