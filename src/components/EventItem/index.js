import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  render() {
    const {eventItemDetail} = this.props
    const {imageUrl, name, location} = eventItemDetail
    return (
      <li className="event-lis-items">
        <button type="button" className="item-button">
          <img className="event-img-control" src={imageUrl} alt={name} />
          <h1 className="item-heading">{name}</h1>
          <p>{location}</p>
        </button>
      </li>
    )
  }
}

export default EventItem
