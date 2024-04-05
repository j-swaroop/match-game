import './index.css'

const FruitTabs = props => {
  const {tabDetails, activeTab, clickTab} = props
  const {tabId, displayText} = tabDetails

  const isTabActive = activeTab ? 'active-tab' : ''

  const changeTab = () => {
    clickTab(tabId)
  }

  return (
    <li className="tab-container">
      <button onClick={changeTab} className={isTabActive} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default FruitTabs
