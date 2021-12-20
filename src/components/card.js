
import starIcon from '../Star-icon.png'

export default function Card(props) {
  let badgeText
  if(props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (  
    <div className='card'>
       <div className='thumbnail'>
       {badgeText && <span>{badgeText}</span>}
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
       