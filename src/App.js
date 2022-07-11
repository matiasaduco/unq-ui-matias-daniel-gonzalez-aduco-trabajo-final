import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tutorial from './Components/Tutorial';
import player from './Images/player.png';

function App() {
  const [IAButton, setIAButton] = useState('active')
  const [playerButton, setPlayerButton] = useState('')
  const [twoPlayerMode, setTwoPlayerMode] = useState('invisible')
  const [roundsQuantity, setRoundsQuantity] = useState(0)

  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')

  const navigate = useNavigate()

  function changeToVsIA() {
    setTwoPlayerMode('invisible')
    setPlayerButton('')
    setIAButton('active')
    setPlayer2Name('')
  }

  function changeVsPlayer() {
    setTwoPlayerMode('')
    setIAButton('')
    setPlayerButton('active')
  }

  function navigateToPlayZone() {
    if(IAButton === 'active' && player1Name && roundsQuantity) {
      const IAName = Object.values(['Sheldon', 'Leonard', 'Howie', 'Raj'])[Math.floor(Math.random() * 4)]
      navigate('/match', {state: {player1: player1Name, player2: '[I.A.] ' + IAName, mode: 'IA', rounds: roundsQuantity}})
    }
    else if (playerButton === 'active' && player1Name && player2Name && roundsQuantity) {
      navigate('/match', {state: {player1: player1Name, player2: player2Name, mode: 'PVP', rounds: roundsQuantity}})
    }
  }

  return (
    <div className='container text-center w-50 border border-2 bg-light pb-5'>
      <Tutorial />
      <div className='row mb-1 w-75 mx-auto'>
        <div className='col'>
          <h3>Seleccione un modo de juego!</h3>
        </div>
      </div>
      <div className="btn-group w-25 mx-auto mb-3">
        <button className={`btn btn-outline-warning ${IAButton} w-25`} onClick={changeToVsIA}>Vs. IA</button>
        <button className={`btn btn-outline-warning ${playerButton} w-25`} onClick={changeVsPlayer}>Vs. Player</button>
      </div>
      <div className='mb-3'>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={() => setRoundsQuantity(1)}/>
          <label className="form-check-label" htmlFor="inlineRadio1">1 ronda</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={() => setRoundsQuantity(3)}/>
          <label className="form-check-label" htmlFor="inlineRadio2">3 rondas</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onChange={() => setRoundsQuantity(5)}/>
          <label className="form-check-label" htmlFor="inlineRadio3">5 rondas</label>
        </div>
      </div>
      <div className='row mt-1 mb-3 w-75 mx-auto'>
        <span className='col-1 input-group-text rounded-0 ms-auto'>
          <img src={player} alt='acá hay una fotito porno' className='text-center mx-auto' height='24' width='20'/>
        </span>
        <input type='text' className='col-2 border border-2 rounded-end w-25 me-auto' value={player1Name} onChange={(event) => setPlayer1Name(event.target.value)} placeholder='Player 1'/>
      </div>
      <div className={`row mb-3 w-75 mx-auto ${twoPlayerMode}`}>
        <span className={`col-1 input-group-text rounded-0 ms-auto`}>
          <img src={player} className='text-center mx-auto' height='24' width='20' />
        </span>
        <input type='text' className='col-2 border border-2 rounded-end w-25 me-auto' value={player2Name} onChange={(event) => setPlayer2Name(event.target.value)} placeholder='Player 2'/>
      </div>
      <div className='text-center'>
        <button className='btn btn-warning' onClick={navigateToPlayZone}>Jugar</button>
      </div>
    </div>
  );
}

export default App;
