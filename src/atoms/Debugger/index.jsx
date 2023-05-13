// nslscore <https://github.com/msikma/nslscore>
// © MIT License

import './index.css'

function Debugger({appState, isVisible, className = ''}) {
  return (
    <div className={`Debugger ${!isVisible ? 'isHidden' : ''} ${className}`}>
      <pre>{JSON.stringify(appState, null, 2)}</pre>
    </div>
  )
}

export default Debugger
