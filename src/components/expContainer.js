import Card from './card'
import data from '../data'

export default function Cards() {
  const myArr = data.map(i => {
    return (
    <Card 
    img={i.coverImg}
    rate={i.stats.rating}
    reviewCount={`${i.stats.reviewCount}
    /`}
    location={i.location}
    title={i.title}
    price={i.price}
    openSpots={i.openSpots}
    unit="person"
  />)
   })
  return (
    <section className='cards'>
     {
      myArr
     }
    </section>
  )
}