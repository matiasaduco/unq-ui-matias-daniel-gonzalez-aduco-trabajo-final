const Selector = ({changeTurnHandler, picks, playerTurn}) => {
    return(
        <div className='btn-group-vertical'>
            {Object.values(picks).map((pick, index) => 
                <button key={`id_${index}`} className={`ms-2 mb-2 w-100 btn btn-primary ${playerTurn? '' : 'disabled'}`} onClick={() => changeTurnHandler(pick)}>
                    {pick.name}
                </button>)}
        </div>
    )
}

export default Selector
