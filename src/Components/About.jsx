import React from 'react'

function About() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>About Us</h1>
        <p className="lead">Learn more about our team and mission</p>
      </header>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, nisi vel lacinia aliquam, est eros vulputate libero,
                eu dapibus mauris lectus vitae orci.
              </p>
              <p>
                Phasellus eu mauris et justo cursus tincidunt. Integer vel metus eu eros tincidunt congue ut vel quam. Maecenas non pharetra odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About