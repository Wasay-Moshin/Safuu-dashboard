import React from "react";

function Accounts() {
  return (
    <div data-aos="flip-right">
    <div className="account">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className="card card-1">
              <h2>Your Balance</h2>
              <strong>$0</strong>
              <h2>0 SAFUU</h2>
            </div>
          </div>
          {/* <div className="col-md-4 "></div> */}
          <div className="col-md-3">
            <div className="card card-1">
              <h2>APY</h2>
              <strong>383,025.8%</strong>
              <h2>Daily ROI 2.28%</h2>
            </div>
          </div>
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-3">
            <div className="card card-1">
              <h2>Next Rebase:</h2>
              <strong>00:12:21</strong>
              <h2>Rebasing...</h2>
            </div>
          </div>{" "}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <div className="card card-2">
                <div>
                  <h2 className="text-start">Current SAFUU Price  <h2>$1.54</h2></h2>
                </div>
                <div>
                  <h2 className="text-start">Next Reward Amount  <h2>0 SAFUU</h2></h2>
                 
                </div>
                <div>
                  <h2 className="text-start">Next Reward Amount USD  <h2>$0</h2></h2>
                 
                </div>
                <div>
                  <h2 className="text-start">Next Reward Yield <h2>0.02355%</h2></h2>
                  
                </div>
                <div>
                  <h2 className="text-start">ROI(1-Day Rate) USD <h2>$0</h2></h2>
                  
                </div>
                <div>
                  <h2 className="text-start">ROI(5-Day Rate) <h2>11.96%</h2></h2>
                  
                </div>
                <div>
                  <h2 className="text-start">ROI(5-Day Rate) USD <h2>$0</h2></h2>
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

export default Accounts;
