
import starIcon from '../Star-icon.png'

export default function Card(props) {
  return (
    
    <div className='card'>
      <div className='thumbnail'>
        <span>{props.status}</span>
        <img src={`./images/${props.img}`} alt="Thumbnail" />
      </div>
      <div className='thumbnailTitle'>
        <div>
          <img src={ starIcon } alt="Thumbnail"/>
        </div>
        
        <p>{ props.rate } <span className="gray">{props.reviewCount} - { props.country }</span></p>
      </div>
      <div className='cardTitle'>
        <p>{ props.title }</p>
        <p><strong>From { props.price }</strong>/ { props.unit }</p>
      </div>
    </div>
  )
}
       