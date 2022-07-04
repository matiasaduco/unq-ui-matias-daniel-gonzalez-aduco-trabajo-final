import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScoreBar from './ScoreBar';
import Selector from './Selector';
import SelectionDrawInterface from './SelectionDrawInterface';

import piedraImg from '../Images/Pool/Piedra.png'
import papelImg from '../Images/Pool/Papel.png'
import tijeraImg from '../Images/Pool/Tijera.png'
import lagartoImg from '../Images/Pool/Lagarto.png'
import spockImg from '../Images/Pool/Spock.png'
import { useStateWithCallbackLazy } from 'use-state-with-callback';


const VersusIA = () => {
    const location = useLocation()
    const [player1, setPlayer1] = useStateWithCallbackLazy({name: location.state.player1, points: 0, selection: {}})
    const [player2, setPlayer2] = useStateWithCallbackLazy({name: 'I.A.', points: 0, selection: {}})
    const [player1Turn, setPlayer1Turn] = useState(true)

    const picks = {
                    piedra: {name: 'Piedra', img: piedraImg, winsAgainst: ['Tijera', 'Lagarto']},
                    papel: {name: 'Papel', img: papelImg, winsAgainst: ['Piedra', 'Spock']},
                    tijera: {name: 'Tijera', img: tijeraImg, winsAgainst: ['Papel', 'Lagarto']},
                    lagarto: {name: 'Lagarto', img: lagartoImg, winsAgainst: ['Spock', 'Papel']},
                    spock: {name: 'Spock', img: spockImg, winsAgainst: ['Tijera', 'Piedra']}
                  }

    function player1Pick(playerSelection) {
        console.log(playerSelection)
        setPlayer1(
            player1 => ({
                ...player1,
                selection: playerSelection
            }), () => {console.log(player1.selection)}
        )
        
        machineTurn()
        setPlayer1Turn(false)
    }

    function player2Pick(playerSelection) {
        setPlayer2(
            player2 => ({
                ...player2,
                selection: playerSelection
            })
        )
        calculateWinner()
        setPlayer1Turn(true)
    }

    function machineTurn() {
        const index = Math.floor(Math.random() * 5)
        setPlayer2(
            player2 => ({
                ...player2,
                selection: Object.values(picks)[index]
            })
        )
        calculateWinner()
        setPlayer1Turn(true)
    }

    function calculateWinner() {
        if(player1.selection.name === player2.selection.name) {
            console.log('EMPATARON!')
        } else if(playerWins(player1.selection)) {
             setPlayer1(
                player1 => ({
                    ...player1,
                    points: player1.points + 1
                })
             )
        } else {
            setPlayer2(
                player2 => ({
                    ...player2,
                    points: player2.points + 1
                })
             )
        }
    }

    function playerWins() {
        let result = player1.selection.winsAgainst.map(winable => winable === player2.selection.name)
        return result.includes(true)
    }

    return(
        <Fragment>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <ScoreBar playerName={player1.name} score={player1.points}/>
                </div>
                <div className="col">
                    <ScoreBar playerName={player2.name} score={player2.points}/>
                </div>
            </div>
            <div className="row mt-5 border">
                <div className="col-2 text-center my-auto"><Selector changeTurnHandler={player1Pick} picks={picks} playerTurn={player1Turn}/></div>
                <div className="vr p-0"/>
                <div className="col"><SelectionDrawInterface player={player1}/></div>
                <div className="vr p-0"/>
                <div className="col"><SelectionDrawInterface player={player2}/></div>
                <div className="vr p-0"/>
                <div className="col-2 text-center my-auto"><Selector changeTurnHandler={player2Pick} picks={picks} playerTurn={!player1Turn}/></div>
            </div>
        </Fragment>
    )
}

export default VersusIA
