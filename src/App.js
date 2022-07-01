import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import player from './Images/player.png'

function App() {
  const [IAButton, setIAButton] = useState('active')
  const [playerButton, setPlayerButton] = useState('')
  const [twoPlayerMode, setTwoPlayerMode] = useState('invisible')
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const navigate = useNavigate()


  function changeToVsIA() {
    setTwoPlayerMode('invisible')
    setPlayerButton('')
    setIAButton('active')
  }

  function changeVsPlayer() {
    setTwoPlayerMode('')
    setIAButton('')
    setPlayerButton('active')
  }

  function navigateToPlayZone() {
    if(IAButton === 'active' && player1Name) {
      navigate('/versus_ia', {state: player1Name})
    }
  }

  return (
    <Fragment>
      <div className='container text-center'>
        <div className='row mt-5 mb-1 w-75 mx-auto'>
          <div className='col'>
            <h3>Seleccione un modo de juego!</h3>
          </div>
        </div>
        <div class="btn-group w-25 mx-auto mb-4">
          <button className={`btn btn-outline-primary ${IAButton} w-25`} onClick={changeToVsIA}>Vs. IA</button>
          <button className={`btn btn-outline-primary ${playerButton} w-25`} onClick={changeVsPlayer}>Vs. Player</button>
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
    </Fragment>
  );
}

export default App;
