import React from 'react'

export const Contact = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Contact Us</h1>
        <p className="lead">Feel free to reach out to us</p>
      </header>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="John Doe" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="john@example.com" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
