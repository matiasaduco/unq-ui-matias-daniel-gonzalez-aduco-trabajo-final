import { useEffect, useState } from 'react'
import incognito from '../Images/Pool/incognito.jpg'

const SelectionDrawInterface = ({player, winner}) => {
    const [border, setBorder] = useState('')
    const [img, setImg] = useState(incognito)

    useEffect(() => {
        if(winner === 'Empate') {
            setBorder('border-3 border-warning')
        } else {
            winner === player.name ? setBorder('border-3 border-success') : setBorder('') 
        }
        winner !== '' && setImg(player.selection.img)
    }, [winner])

    return(
        <div className="text-center">
            <h4>{player.name}</h4>
            <div>{winner ? player.selection.name : 'Esperando elección...'}</div>
            <img src={img} alt="selección" className={`w-75 mt-2 mb-3 p-3 border rounded ${border}`}/>
        </div>
    )
}

export default SelectionDrawInterface
