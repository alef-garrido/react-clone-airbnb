
import starIcon from '../Star-icon.png'

export default function Card(props) {
  console.log(props)
  return (
    
    <div className='card'>
      <div className='thumbnail'>
        <span>{props.status}</span>
        <img src={`../images${props.img}`} />
      </div>
      <div className='thumbnailTitle'>
        <div>
          <img src={ starIcon } />
        </div>
        <p>{ props.rate } - { props.country }</p>
      </div>
      <div className='cardTitle'>
        <p>{ props.title }</p>
        <p><strong>From { props.price }</strong>/ { props.unit }</p>
      </div>
    </div>
  )
}
       