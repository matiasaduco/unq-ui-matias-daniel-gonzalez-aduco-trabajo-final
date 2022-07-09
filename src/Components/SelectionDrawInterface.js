import incognito from '../Images/Pool/incognito.jpg'

const SelectionDrawInterface = ({player, winner}) => {
    return(
        <div className="text-center">
            <h4>{player.name}</h4>
            <div>{player.selection.name ? player.selection.name : 'Esperando elección...'}</div>
            <img src={player.selection.name ? player.selection.img : incognito} alt="selección" className={`w-75 mt-2 mb-3 p-3 border rounded ${winner && winner.name === player.name ? 'border-3 border-success' : ''}`}/>
        </div>
    )
}

export default SelectionDrawInterface
