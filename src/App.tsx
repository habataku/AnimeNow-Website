import './App.css';
import Logo from './player-logo.png';

import AppleLogo from './Apple_logo_black.svg'

function App() {
  return (
    <div>
      <Toolbar />
      <HeroScreen />
    </div>
  );
}

const HeroScreen = () => {
  return (
    <div>
      {/* Hero Text Container */}
      <div className='hero-container'>
        <h1>
          <span>Stream anime shows</span>
        </h1>
        <h1>
          <span className='primary-accent'>for free.</span>
        </h1>
        <DownloadButton />
      </div>
    </div>
  )
}

const Toolbar = () => {
  return (
    <div className='toolbar-container'>
      {/* Logo */}
      <div className='logo-container'>
        <div>
          <img src={Logo} alt="Anime Now! App Logo" />
        </div>
        <div>
          {/* <p>Anime Now!</p> */}
        </div>
      </div>

      {/* Spacer */}
      <div className='spacer'></div>

      {/* Items */}
      <div className='toolbar-items-container'>
        {/* Features */}
        <div className='toolbar-item'>
          <p>Features</p>
        </div>

        {/* Updates */}
        <div className='toolbar-item'>
          <p>Updates</p>
        </div>
      </div>
    </div>
  )
}

const DownloadButton = () => {
  return (
      <div className='download-button-container'>
      {/* Apple Icon */}
      <div>
        <img src={AppleLogo} />
      </div>

      {/* Text */}
      <div>
        <p>Download for macOS</p>
      </div>
    </div>
  )
}

export default App;
