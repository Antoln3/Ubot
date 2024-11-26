import React from "react"


function Head() {
    // state
    
    // comportements

    // affichage
    return <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="stretched-link" href="#">
              <img src="./source/assets/Orange_logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy"/>
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link" href="#">Pricing</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
}


export default Head