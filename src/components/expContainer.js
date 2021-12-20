import Card from './card'
import data from '../data'

export default function Cards() {
  return (
    <section className='cards'>
     {
      data.map(i => {
        <Card 
        status={i.status}
        img={i.coverImg}
        rate={i.stats.rating}
        reviewCount="(/`${i.stats.reviewCount}
        /`)"
        country={i.location}
        title={i.title}
        price={i.price}
        unit="person"
      />
       })
     }
    </section>
  )
}