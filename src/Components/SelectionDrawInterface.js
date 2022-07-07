import incognito from '../Images/incognito.jpg'

const SelectionDrawInterface = ({player}) => {
    return(
        <div className="text-center">
            <h4>{player.name}</h4>
            <div>{player.selection.name ? player.selection.name : 'Esperando elección...'}</div>
            <img src={player.selection.name ? player.selection.img : incognito} alt="selección" className={`w-75 mt-2 mb-3 p-3 border rounded`}/>
        </div>
    )
}

export default SelectionDrawInterface
