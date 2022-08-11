import React from "react";

export default function About() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Company</h1>
        <p>We specialize in blablabla</p>
        <form className="form-inline" style={{ margin: "5px" }}>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              size="50"
              placeholder="Email Address"
              required
            />
            <div className="input-group-btn">
              <button type="button" className="btn btn-danger">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>About Company Page</h2>
            <h4>Lorem ipsum..</h4>
            <p>Lorem ipsum..</p>
            <button className="btn btn-primary">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo"></span>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum..
            </h4>
            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
