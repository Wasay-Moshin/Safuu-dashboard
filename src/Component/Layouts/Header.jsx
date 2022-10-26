import React from "react";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiMedium} from 'react-icons/si'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span type="button" className="btn-safuu">
              <b>SAFUU</b>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav social-row px-5">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1"><AiOutlineTwitter size={"25px"}/></b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1"> <FaDiscord size={"25px"}/></b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1"><FaTelegramPlane size={"25px"}/></b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1"><SiMedium size={"25px"}/></b>
                </a>
              </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <button type="button" className="btn-safuu1">
                    <b>SAFUU</b>
                  </button>
                </a>
              </li>
              <button type="button" className="btn-connect">
                <b>Connect Wallet</b>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Header;
