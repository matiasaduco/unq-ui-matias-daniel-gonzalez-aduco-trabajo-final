import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import player from './Images/player.png'

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
    if(IAButton === 'active' && player1Name && roundsQuantity !== 0) {
      const IAName = Object.values(['Sheldon', 'Leonard', 'Howie', 'Raj'])[Math.floor(Math.random() * 5)]
      navigate('/versus_ia', {state: {player1: player1Name, player2: '[I.A.] ' + IAName, mode: 'IA', rounds: roundsQuantity}})
    }
    else if (playerButton === 'active' && player1Name && player2Name && roundsQuantity !== 0) {
      navigate('/versus_ia', {state: {player1: player1Name, player2: player2Name, mode: 'PVP', rounds: roundsQuantity}})
    }
  }

  return (
    <div className='container text-center'>
      <div className='row mt-5 mb-1 w-75 mx-auto'>
        <div className='col'>
          <h3>Seleccione un modo de juego!</h3>
        </div>
      </div>
      <div className="btn-group w-25 mx-auto mb-3">
        <button className={`btn btn-outline-primary ${IAButton} w-25`} onClick={changeToVsIA}>Vs. IA</button>
        <button className={`btn btn-outline-primary ${playerButton} w-25`} onClick={changeVsPlayer}>Vs. Player</button>
      </div>
      <div className='mb-3'>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={() => setRoundsQuantity(1)}/>
          <label class="form-check-label" for="inlineRadio1">1 ronda</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={() => setRoundsQuantity(3)}/>
          <label class="form-check-label" for="inlineRadio2">3 rondas</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onChange={() => setRoundsQuantity(5)}/>
          <label class="form-check-label" for="inlineRadio3">5 rondas</label>
        </div>
      </div>
      <div className='row mt-1 mb-3 w-75 mx-auto'>
        <span className='col-1 input-group-text rounded-0 ms-auto'>
          <img src={player} alt='acá hay una fotito porno' className='text-center mx-auto' height='24' width='20'/>
        </span>
        <input type='text' className='col-2 border border-2 rounded-end w-25 me-auto' onChange={(event) => setPlayer1Name(event.target.value)} placeholder='Player 1'/>
      </div>
      <div className={`row mb-3 w-75 mx-auto ${twoPlayerMode}`}>
        <span className={`col-1 input-group-text rounded-0 ms-auto`}>
          <img src={player} className='text-center mx-auto' height='24' width='20' />
        </span>
        <input type='text' className='col-2 border border-2 rounded-end w-25 me-auto' onChange={(event) => setPlayer2Name(event.target.value)} placeholder='Player 2'/>
      </div>
      <div className='text-center'>
        <button className='btn btn-outline-primary' onClick={navigateToPlayZone}>Jugar</button>
      </div>
    </div>
  );
}

export default App;
