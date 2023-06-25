import './index.css'

const HistoryList = props => {
  const {historyItem, onClickDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onClickDeleteButton = () => {
    onClickDeleteHistory(id)
  }

  return (
    <li className="history-list-container">
      <p className="time-accessed">{timeAccessed}</p>

      <div className="logotitleurldeleteicon-container">
        <div className="logotitleurl-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="titleurl-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>

        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
