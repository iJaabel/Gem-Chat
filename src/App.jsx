import "./App.css"
import EmailSignup from "./components/EmailSignup.jsx"
import { TRAILER_VIDEO_ID, YOUTUBE_CHANNEL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "./config.js"

function App() {
  const trailerSrc = `https://www.youtube.com/embed/${TRAILER_VIDEO_ID}?rel=0&modestbranding=1`;

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-left-logo">
            <h1 className="brand-title"><span>NightPaths</span></h1>
          </div>
          <nav className="navbar-right">
            <a className="social-link" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">YouTube</a>
            <a className="social-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
            <a className="social-link" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
          </nav>
        </div>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">Choose Your Fate</h1>
            <p className="hero-subtitle">A Goosebumps-inspired, branching horror video saga.</p>
            <EmailSignup />
          </div>
        </section>

        <section className="trailer-section">
          <div className="trailer-container">
            <div className="trailer-embed">
              <iframe
                src={trailerSrc}
                title="Series Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="trailer-caption">Start at the trailer. Make your choice at the end.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} NightPaths. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
