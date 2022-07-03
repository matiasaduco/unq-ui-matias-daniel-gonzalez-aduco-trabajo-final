const Selector = ({changeTurnHandler, picks, playerSide}) => {
    return(
        <div className='btn-group-vertical'>
            <button className={`ms-2 mb-2 w-100 btn btn-primary ${playerSide ? '' : 'disabled'}`} onClick={() => changeTurnHandler(picks.piedra)}>
                {picks.piedra.name}
            </button>
            <button className={`ms-2 mb-2 w-100 btn btn-primary ${playerSide ? '' : 'disabled'}`} onClick={() => changeTurnHandler(picks.papel)}>
                {picks.papel.name}
            </button>
            <button className={`ms-2 mb-2 w-100 btn btn-primary ${playerSide ? '' : 'disabled'}`} onClick={() => changeTurnHandler(picks.tijera)}>
                {picks.tijera.name}
            </button>
            <button className={`ms-2 mb-2 w-100 btn btn-primary ${playerSide ? '' : 'disabled'}`} onClick={() => changeTurnHandler(picks.lagarto)}>
                {picks.lagarto.name}
            </button>
            <button className={`ms-2 w-100 btn btn-primary ${playerSide ? '' : 'disabled'}`} onClick={() => changeTurnHandler(picks.spock)}>
                {picks.spock.name}
            </button>
        </div>
    )
}

export default Selector
