import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="list-items">
      <img src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
