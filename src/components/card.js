
import starIcon from '../Star-icon.png'

export default function Card(props) {
  let badgeText
  if(props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (  
    <div className='card'>
       <div className='thumbnail'>
       {badgeText && <span>{badgeText}</span>}
        <img src={`./images/${props.item.coverImg}`} alt="Thumbnail" />
      </div>
      <div className='thumbnailTitle'>
        <div>
          <img src={ starIcon } alt="Thumbnail"/>
        </div>
        
        <p>{ props.item.stats.rating } <span className="gray">{props.reviewCount} - { props.item.location }</span></p>
      </div>
      <div className='cardTitle'>
        <p>{ props.item.title }</p>
        <p><strong>From ${ props.item.price }</strong>/ person</p>
      </div>
    </div>
  )
}
       