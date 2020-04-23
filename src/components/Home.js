import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div >
        <div className="jumbotron jumbotron-fluid" style={{height : "100vh"}}>
          <div className="container">
            <div className="row">
              <div className="col-6 text-center">
                <h1>hello jumbotron </h1>
                <h1>welcome</h1>
              </div>
              <div className="col-6">
                {/* <img src={} alt="..."/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col-3">
                    <label>contact</label>
                </div>
                <div className="col-3">
                  {/* <img src={}/> */}
                </div>
                <div className="col-3">
                  {/* <img src={}/> */}
                </div>
                <div className="col-3">
                  {/* <img src={}/> */}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
