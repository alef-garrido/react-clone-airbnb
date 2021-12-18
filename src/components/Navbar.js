import Logo from '../airbnb-logo.png'

export default function Navbar() {
  return(
    <nav className='navbar'>
      <div className='Logo'>
      <img src={ Logo } alt="" />
      </div>
    </nav>
  )
}