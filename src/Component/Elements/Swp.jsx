import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
function Swp() {
  return (
    <div className="swap">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="content">
                <h4>Swap</h4>
                <h6>Fast, Secure, KYC-Free.</h6>
              </div>
              <div className="input-box">
                <p>
                  From
                  <span>Balance: 0</span>
                </p>
                <div className="input-section">
                  <input type="text" placeholder="0.00"></input>
                  <span style={{ color: " #34c439" }}>Max</span>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <b>BNB</b>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          BNB
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Menu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="exchange-btn">
                <AiOutlineArrowDown size={"30px"} color={" #114e13"} />
              </div>
              <div className="input-box">
                <p>
                  To
                  <span>Balance: 0</span>
                </p>
                <div className="input-section">
                  <input type="text" placeholder="0.00"></input>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <b>SAFUU</b>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          BNB
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Menu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="status">
                <p>
                  Slippage Tolerance
                  <span style={{ color: " #34c439" }}>
                    <b>0.1%</b>
                  </span>
                </p>
              </div>
              <div className="swap-btn">Connect Wallet</div>
              <div className="swap-details mb-3">
                <p>
                  <span>
                    Minimum received <AiOutlineQuestionCircle size={"15px"} />
                  </span>
                  <span>0 SAFUU</span>
                </p>
                <p>
                  <span>
                    Price Impact 0<AiOutlineQuestionCircle size={"15px"} />
                  </span>
                  <span>0%</span>
                </p>
                <p>
                  <span>
                    Liquidity Provider Fee
                    <AiOutlineQuestionCircle size={"15px"} />
                  </span>
                  <span>0% - No Fee</span>
                </p>
                <p>
                  <span>
                    Route
                    <AiOutlineQuestionCircle size={"15px"} />
                  </span>
                  <span>SAFUU --  BNB</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swp;
