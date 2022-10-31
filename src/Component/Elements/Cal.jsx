import React from "react";
import { useState } from "react";
function Cal() {
  const [days, setDays] = useState("1 day");
  const [amount, setAmount] = useState("$ 0");
  return (
    <div className="cal">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9 ">
            <div className="card card1 text-start mt-5 p-4 mb-5">
              <div>
                <h4>
                  <b>Calculator</b>
                </h4>
                <h6>Estimate your returns</h6>
              </div>
              <div>
                <div className="d-flex justify-content-between price mx-5 mt-3 text-center">
                  <div>
                    <h4>
                      <b className="price">SAFUU Price</b>
                    </h4>
                    <h3 style={{ color: "white" }}>$1.53</h3>
                  </div>
                  <div>
                    <h4>
                      <b className="price">Current APY</b>
                    </h4>
                    <h3 style={{ color: "white" }}>383,025.8%</h3>
                  </div>
                  <div>
                    <h4>
                      <b className="price">Your SAFUU Balance</b>
                    </h4>
                    <h3 style={{ color: "white" }}>0 SAFUU</h3>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="d-flex max justify-content-between px-4">
                <div>
                  <h5>
                    <b>SAFUU Amount</b>
                  </h5>
                  <div
                    className="card card2  py-3 mt-1 text-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-flex justify-content-between px-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Amount"
                          className="amount"
                          onChange={(e) => setAmount("$" + e.target.value)}
                        />
                      </div>
                      <div>
                        <h5>
                          <b>MAX</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>
                    <b>APY (%)</b>
                  </h5>
                  <div
                    className="card card2 py-3 mt-1 text-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-flex justify-content-between px-4">
                      <div>
                        <h5>
                          <b>383025.8</b>
                        </h5>
                      </div>
                      <div>
                        <h5>
                          <b>Current</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex max justify-content-between px-4">
                <div>
                  <h5>
                    <b>SAFUU price at purchase ($)</b>
                  </h5>
                  <div
                    className="card card2 py-3 mt-1 text-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-flex justify-content-between px-4">
                      <div>
                        <h5>
                          <b>1.52</b>
                        </h5>
                      </div>
                      <div>
                        <h5>
                          <b>Current</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>
                    <b>Future SAFUU market price ($)</b>
                  </h5>
                  <div
                    className="card card2 py-3 mt-1 text-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-flex justify-content-between px-4">
                      <div>
                        <h5>
                          <b>1.52</b>
                        </h5>
                      </div>
                      <div>
                        <h5>
                          <b>Current</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex max justify-content-between px-4 mt-5">
                <div className="text-start">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>
                        <b>{days}</b>
                      </h6>
                    </div>{" "}
                    &nbsp; &nbsp; &nbsp;
                    <div className="text-end">
                      <h6>
                        <b>First Year : 0.02355% Per EPOCH</b>
                      </h6>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    onChange={(e) => setDays(e.target.value + "days")}
                    className="form-range slide2"
                    id="customRange1"
                  ></input>
                </div>
                <div>
                  <div>
                    <h6>
                      <b>Second Year : 0.00211% Per EPOCH</b>
                    </h6>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="124"
                    className="form-range slide2"
                    id="customRange2"
                  ></input>
                </div>
              </div>
              <div className="d-flex initial justify-content-between px-4 mt-5">
                <div className="text-start">
                  <h5>
                    <b>Your initial investment</b>
                  </h5>
                  <h5>
                    <b>Current wealth</b>
                  </h5>
                  <h5>
                    <b>SAFUU rewards estimation</b>
                  </h5>
                  <h5>
                    <b>Potential return</b>
                  </h5>
                </div>
                <div className="text-end">
                  <h5>
                    <b>{amount}</b>
                  </h5>
                  <div>
                    <h5 className="mt-1">
                      <b>{amount}</b>
                    </h5>
                    <h5 className="mt-1">
                      <b>0 SAFUU</b>
                    </h5>
                    <h5 className="mt-1">
                      <b>{amount}</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cal;
