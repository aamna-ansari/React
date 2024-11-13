import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
        <div className="container-fluid bg-dark py-0">
          <div className="row">
            <div className="col">
              <p className="mb-0 text-white  text-center">&copy; {year}. All Rights Reversed.</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer