const ScoreBar = ({playerName, score, rounds}) => {
    return(
        <div className='row w-50 p-1 mx-auto border border-2 text-center'>
            <h4 className='col my-auto'>{playerName}</h4>
            <h4 className='col-3 my-auto border border-2 me-1'>{score}/{rounds}</h4>
        </div>
    )
}

export default ScoreBar
