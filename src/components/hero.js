import grid from '../hero-grid.png'
export default function Hero() {
  return (
    <section className='hero'>
      <img src={ grid } alt=""/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive adtivities lead by<br/>
      one-of-a-kind hosts-- all without leaving home</p>
    </section>
  )
}