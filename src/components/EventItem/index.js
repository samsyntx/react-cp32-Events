import './index.css'

const EventItem = props => {
  const {eventItemDetail, changeStateOfEventRegistration, isActiveId} = props
  const {id, imageUrl, name, location, registrationStatus} = eventItemDetail
  const showEventItemStatus = () => {
    changeStateOfEventRegistration(id, registrationStatus)
  }

  const activeEventItemStyle = isActiveId ? 'active-item-style' : ''

  return (
    <li className="event-lis-items">
      <button
        onClick={showEventItemStatus}
        type="button"
        className="item-button"
      >
        <img
          className={`event-img-control ${activeEventItemStyle}`}
          src={imageUrl}
          alt="event"
        />
        <p className="item-heading">{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
