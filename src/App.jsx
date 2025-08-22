// import { useState } from 'react'
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        {/* navbar */}
        <div className="navbar-container">
          <div className="navbar-left">
            {/* left */}
            <div className="navbar-left-logo">
              {/* logo */}
              <img src="" alt="" />
              {/* title */}
              <h1 className="navbar-left-logo-title">
                <span>Logo</span>
              </h1>
            </div>
            {/* right */}
            <div className="navbar-right">
              {/* subtitle */}
              <p>
                <span>
                  <img src="" alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* hero section */}
        <div>
          {/* container */}
          <div>
            {/* headline or hook */}
            <div>
              <h1>
                <span></span>
              </h1>
            </div>
            {/* button */}
            <div>
              <button>
                <span>"call to action"</span>
              </button>
            </div>
            {/* product details */}
            <div>
              <p>
                <span>Product details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
