import incognito from '../Images/incognito.jpg'

const SelectionDrawInterface = ({player, selection}) => {
    return(
        <div className="text-center">
            <h4>{player}</h4>
            <div>{selection? selection.name : 'Esperando elección...'}</div>
            <img src={selection ? selection.img : incognito} alt="selección" className={`w-75 mt-2 mb-3 p-3 border rounded`}/>
        </div>
    )
}

export default SelectionDrawInterface
