import logo from '../logo.svg';

export default function Banner() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made with React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React gurl!
        </a>
      </header>
  )
}