import "./index.css"

const NavBar = (props) => {
    const {timer, score} = props
    return(
        <nav className="nav-container">
            <nav className="nav-items">
                <img className="website-logo" src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png " 
                    alt="website logo"/>
            </nav>
            <nav className="text-container">
                <p className="score-heading"> Score:{score}</p>
                <img className="timer-img" alt="timer"
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"/>
                <p className="timer"> {timer} sec</p>
            </nav>
        </nav>
    )
}


export default NavBar