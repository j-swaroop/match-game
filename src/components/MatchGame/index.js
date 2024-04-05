import {Component} from "react"
import "./index.css"
import NavBar from "../NavBar"
import FruitTabs from "../FruitTabs"
import FruitItems from "../FruitItems"
import ScoreCard from "../ScoreCard"


class MatchGame extends Component{
    state = {
        initialThumbnail: this.props.imagesList[0].imageUrl,
        activeTabId: this.props.tabsList[0].tabId,
        timer: 60,
        score: 0,
        gameEnd: false
    }


    tick = () => {

        const {timer} = this.state
        if (timer !== 0){
            this.setState(prevState => ({timer: prevState.timer - 1}))
        }else{
            clearInterval(this.timerId)
            this.renderScoreCard()
            this.setState(prevState => ({gameEnd: !prevState.gameEnd, timer: 0}))
        }
    }

    componentDidMount = () => {
        const {timer} = this.state
        this.timerId = setInterval(this.tick, 1000)
        
    }

    resetGamer = () => {
        this.setState({
            initialThumbnail: this.props.imagesList[0].imageUrl,
            activeTabId: this.props.tabsList[0].tabId,
            timer: 60,
            score: 0,
            gameEnd: false
        })
        this.timerId = setInterval(this.tick, 1000)

    }

    renderScoreCard = () => {
        const {score} = this.state
        return(
            <ScoreCard resetGamer={this.resetGamer} score={score}/>
        )
    }

    renderRandomThumbnail = () => {
        const {imagesList} = this.props
        const randomImg = Math.ceil(Math.random() * imagesList.length - 1)
        const randomImgUrl = imagesList[randomImg].imageUrl
        this.setState({initialThumbnail: randomImgUrl})
    }

    onclickTabItem = (imageUrl) => {
        const {initialThumbnail, timer} = this.state

        if(imageUrl === initialThumbnail){
            this.setState(prevState => ({score: prevState.score + 1}))
            this.renderRandomThumbnail()
        }else{
            clearInterval(this.timerId)
            this.renderScoreCard()
            this.setState(prevState => ({gameEnd: !prevState.gameEnd, timer: 0}))
        }
    }
    

    renderFruitItems = () => {
        const {imagesList} = this.props
        const {activeTabId} = this.state
        const filteredList = imagesList.filter(eachImage => eachImage.category === activeTabId)

        return(
            <ul className="images-container">
                {filteredList.map(eachImage => <FruitItems onclickTabItem={this.onclickTabItem} key={eachImage.id} imageDetails={eachImage}/>)}
            </ul>
        )
    }
    
    onclickTab = (tabId) => {
        const {tabsList} = this.props
        this.setState({activeTabId: tabId})
    }

    renderTabs = () => {
        const {activeTabId} = this.state
        const {tabsList} = this.props
        return(
            <ul className="tabs-container"> 
                {tabsList.map(eachTab => <FruitTabs activeTab={activeTabId === eachTab.tabId} clickTab={this.onclickTab}
                    key={eachTab.tabId} tabDetails={eachTab}/>)}
            </ul>
        )
    }

    renderThumbnailImage = () => {
        const {initialThumbnail} = this.state
        return(
            <li>
                <img alt="match" className="thumbnail-img" src={initialThumbnail}/>
            </li>
        )
    }

    
    
    render(){
        const {tabsList, imagesList} = this.props
        const {initialThumbnail, timer, score, gameEnd} = this.state
        
        let gamebody
        if (gameEnd === true){
            gamebody = this.renderScoreCard()
        }else{
            gamebody = (
                    <ul className="body-container">
                        {this.renderThumbnailImage()}
                        {this.renderTabs()}
                        {this.renderFruitItems()}
                    </ul>
            )
        }


        return(
            <div className="bg-container">
                <ul className="ul">
                    <NavBar timer={timer} score={score}/>
                    <div className="body">
                        {gamebody}
                    </div>
                </ul>
            </div>
        )
    }
}

export default MatchGame