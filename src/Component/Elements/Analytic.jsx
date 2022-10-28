import React from "react";
import Table from "react-bootstrap/Table";

function Analytic() {
  return (
    <div data-aos="zoom-in">
    <div className="analytic">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className="card card-1 text-center">
              <h2>How much you have invested so far?</h2>
              <img src="Assests/e1.png" alt="" width={"60px"} />
              <h2>Total Investment</h2>
              <div className="c-value">
                <b>$0</b>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-1">
              <h2>Risk meter</h2>
              <img src="Assests/meter.png" alt="" width={"40px"} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-1 text-center">
              <h2>How much you have withdrawn so far?</h2>
              <img src="Assests/e2.png" alt="" width={"60px"} />
              <h2>Total Earned</h2>
              <div className="c-value">
                <b>$0</b>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="card card-2 text-center">
              <div className="t-btn">
                <span>Recent Trading history</span>
              </div>
              <div className="threads text-start">
                <Table striped>
                  <thead>
                    <tr>
                      <th>Transaction Hash</th>
                      <th>Block Number</th>
                      <th>Method</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>$ SAFUU</th>
                      <th>$ BNB</th>
                    </tr>
                  </thead>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Analytic;
