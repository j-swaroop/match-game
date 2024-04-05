import "./index.css"

const ScoreCard = (props) => {
    const {score, resetGamer} = props

    const resetGame = () => {
        resetGamer()
    }

    return(
        <div className="scorecard-container">
            <img className="trophy-img" alt="trophy" src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"/>
            <p> Your Score</p>
            <h1> {score} </h1>
            <button className="reset-button" onClick={resetGame} type="button"> 
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png" alt="reset" />
                Play Again
            </button>
        </div>
    )
}

export default ScoreCard