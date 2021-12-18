import Card from './card'

export default function Cards() {
  return (
    <section className='cards'>
      <Card 
        status="SOLD OUT"
        img="/thumbnail1.png"
        rate="5.0"
        reviewCount=" (6)"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="$138"
        unit="person"
      />
    </section>
  )
}