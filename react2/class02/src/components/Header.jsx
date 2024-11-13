import React from 'react'

const Header = () => {
  const isAuth = true;
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
      </ul>
      <div>
        {isAuth
        ?<button className="btn btn-success">LogIn</button>
        :<button className="btn btn-danger">LogOut</button>
        }
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header