import React from "react";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiMedium} from 'react-icons/si'
import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
     {/* <div className="canvas">
     <Button className="c-btn"
          variant="primary" onClick={handleShow}>
       Home
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <img src="Assests/safuu-logo.png" alt="" width={"50%"} />
          </Offcanvas.Title>
        </Offcanvas.Header>
          <div className="slider-menu">
        <Link className="d1 px-3" to="/dashboard" >
          <img src="Assests/d1.png" alt="" width={"13%"} />

          &nbsp; &nbsp; Dashboard
        </Link>
        <a className="d1 active px-3 mt-4" href="/">
          <img src="Assests/account.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Account
        </a>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/swap.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Swap
        </a>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/calculator.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Calculator
        </a>
        <a className="d1 px-3 mt-4" href="/">
          <img src="Assests/analytics.png" alt="" width={"13%"} />
          &nbsp; &nbsp; Analytics
        </a>
      </div>
      </Offcanvas>
     </div> */}
     
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
