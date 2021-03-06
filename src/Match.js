import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScoreBar from './Components/ScoreBar';
import Selector from './Components/Selector';
import SelectionDrawInterface from './Components/SelectionDrawInterface';
import piedraImg from './Images/Pool/Piedra.png'
import papelImg from './Images/Pool/Papel.png'
import tijeraImg from './Images/Pool/Tijera.png'
import lagartoImg from './Images/Pool/Lagarto.png'
import spockImg from './Images/Pool/Spock.png'
import Rules from './Components/Rules';

const Match = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const rounds = location.state.rounds

    const [player1, setPlayer1] = useState({name: location.state.player1, points: 0, selection: {}})
    const [player2, setPlayer2] = useState({name: location.state.player2, points: 0, selection: {}})

    const [player1Turn, setPlayer1Turn] = useState(true)
    const [winner, setWinner] = useState('')

    const [ready, setReady] = useState(false)

    const picks = {
                    piedra: {name: 'Piedra', img: piedraImg, winsAgainst: ['Tijera', 'Lagarto']},
                    papel: {name: 'Papel', img: papelImg, winsAgainst: ['Piedra', 'Spock']},
                    tijera: {name: 'Tijera', img: tijeraImg, winsAgainst: ['Papel', 'Lagarto']},
                    lagarto: {name: 'Lagarto', img: lagartoImg, winsAgainst: ['Spock', 'Papel']},
                    spock: {name: 'Spock', img: spockImg, winsAgainst: ['Tijera', 'Piedra']}
                  }

    const player1Pick = (playerSelection) => {
        if(!isOver()) {
            setPlayer1(
                player1 => ({
                    ...player1,
                    selection: playerSelection
                })
            )
            if(location.state.mode === 'IA'){
                machineTurn()
            }
            setPlayer1Turn(false)
        }
    }

    const isOver = () => {
        return player1.points === rounds || player2.points === rounds
    }

    const machineTurn = () => {
        const index = Math.floor(Math.random() * 5)
        const pick = Object.values(picks)[index]
        setPlayer2(
            player2 => ({
                ...player2,
                selection: pick
            })
        )
        setReady(true)
    }

    const player2Pick = (playerSelection) => {
        setPlayer2(
            player2 => ({
                ...player2,
                selection: playerSelection
            })
        )
        setReady(true)
    }

    useEffect(() => {
        if(ready) {
            calculateWinner()
            setReady(false)
            setPlayer1Turn(true)
        }
    }, [ready])

    const calculateWinner = () => {
        if(player1.selection.name === player2.selection.name) {
            setWinner('Empate')
        } else if(playerWins()) {
                setPlayer1(
                player1 => ({
                    ...player1,
                    points: player1.points + 1
                })
                )
                setWinner(player1.name)
        } else {
            setPlayer2(
                player2 => ({
                    ...player2,
                    points: player2.points + 1
                })
                )
                setWinner(player2.name)
        }
    }

    const playerWins = () => {
        let result = player1.selection?.winsAgainst.map(winable => winable === player2.selection.name)
        return result.includes(true)
    }

    const resetStats = () => {
        setPlayer1(
            player1 => ({
                ...player1,
                points: 0,
                selection: {}
            })
        )
        setPlayer2(
            player2 => ({
                ...player2,
                points: 0,
                selection: {}
            })
        )        
        setWinner('')
        setPlayer1Turn(true)
    }

    return(
        <Fragment>
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <ScoreBar player={player1} rounds={rounds}/>
                </div>
                <div className='col w-25 p-1 text-center'>
                    <Rules/>
                </div>
                <div className="col">
                    <ScoreBar player={player2} rounds={rounds}/>
                </div>
            </div>
            <div className="row mt-4 border bg-light w-100 mx-auto">
                <div className="col-2 text-center my-auto"><Selector changeTurnHandler={player1Pick} picks={picks} playerTurn={player1Turn}/></div>
                <div className="vr p-0"/>
                <div className="col"><SelectionDrawInterface player={player1} winner={winner}/></div>
                <div className="vr p-0"/>
                <div className="col"><SelectionDrawInterface player={player2} winner={winner}/></div>
                <div className="vr p-0"/>
                <div className="col-2 text-center my-auto"><Selector changeTurnHandler={player2Pick} picks={picks} playerTurn={!player1Turn}/></div>
            </div>
            <div className="text-center mt-4" role="group">
                <button type="button" className="btn btn-warning me-1" onClick={resetStats}>Jugar de nuevo</button>
                <button type="button" className="btn btn-warning ms-1" onClick={() => navigate('/')}>Men?? principal</button>
            </div>
        </Fragment>
    );
}

export default Match
