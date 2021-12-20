import Card from './card'
import data from '../data'

export default function Cards() {
  const myArr = data.map(i => {
    return (
    <Card 
    key={i.id}
    {...i}
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