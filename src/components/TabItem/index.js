import './index.css'

const TabItem = props => {
  const {tabDetails, clickAppItem} = props
  const {displayText, tabId} = tabDetails

  const onClicked = () => {
    clickAppItem(tabId)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onClicked}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
