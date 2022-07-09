const ScoreBar = ({player, rounds}) => {
    return(
        <div className='row w-50 p-1 mx-auto border border-2 text-center bg-light'>
            <h4 className='col my-auto'>{player.name}</h4>
            <h4 className='col-3 my-auto border border-2 me-1'>{player.points}/{rounds}</h4>
        </div>
    )
}

export default ScoreBar
