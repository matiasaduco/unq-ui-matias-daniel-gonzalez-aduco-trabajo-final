import { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom';
import playerImage from '../Images/player.png'

const VersusIA = () => {
    const playerName = useLocation().state
    const [points, setPoints] = useState(0)
    const [machineSelection, setMachineSelection] = useState()

    const piedra = {name: 'Piedra', winsAgainst: ['Tijera', 'Lagarto']}
    const papel = {name: 'Papel', winsAgainst: ['Piedra', 'Spock']}
    const tijera = {name: 'Tijera', winsAgainst: ['Papel', 'Lagarto']}
    const lagarto = {name: 'Lagarto', winsAgainst: ['Spock', 'Papel']}
    const spock = {name: 'Spock', winsAgainst: ['Tijera', 'Piedra']}

    function machineTurn(playerSelection) {
        const list = [piedra, papel, tijera, lagarto, spock]
        const index = Math.floor(Math.random() * 5)
        setMachineSelection(list[index])

        playerWins(playerSelection) ? setPoints(points + 1) : console.log('Ganó la IA!')
    }

    function playerWins(playerSelection) {
        let result = playerSelection.winsAgainst.map(winable => winable === machineSelection.name)
        return result.includes(true)
    }

    return(
        <Fragment>
            <div className='container text-center w-25 mx-auto border bg-light p-3'>
                <div className='row m-0 justify-content-center'>
                    <img src={playerImage} className='col-2'/>
                    <h4 className='col-6 text-start my-auto'>{playerName}</h4>
                    <h4 className='col-1 border border-2 rounded my-auto p-0'>{points}</h4>
                </div>
            </div>
            <div className='container text-center w-25 mx-auto border bg-light p-3'>
                <button onClick={() => machineTurn(piedra)}>{piedra.name}</button>
                <button onClick={() => machineTurn(papel)}>{papel.name}</button>
                <button onClick={() => machineTurn(tijera)}>{tijera.name}</button>
                <button onClick={() => machineTurn(lagarto)}>{lagarto.name}</button>
                <button onClick={() => machineTurn(spock)}>{spock.name}</button>
            </div>
            <div className='container text-center w-25 mx-auto border bg-light p-3'>
                {machineSelection ? machineSelection.name : 'Esperando al jugador...'}
            </div>
        </Fragment>
    )
}

export default VersusIA
