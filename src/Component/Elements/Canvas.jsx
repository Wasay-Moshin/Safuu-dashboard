import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
function Canvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Button className="c-btn"
         variant="primary" onClick={handleShow}>
      Menu
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
       <Link className="d1 active px-3 mt-4" to="/account">
         <img src="Assests/account.png" alt="" width={"13%"} />
         &nbsp; &nbsp; Account
       </Link>
       <Link className="d1 px-3 mt-4" to="/swap">
         <img src="Assests/swap.png" alt="" width={"13%"} />
         &nbsp; &nbsp; Swap
       </Link>
       <Link className="d1 px-3 mt-4" to="/cal">
         <img src="Assests/calculator.png" alt="" width={"13%"} />
         &nbsp; &nbsp; Calculator
       </Link>
       <Link className="d1 px-3 mt-4" to="/analytic">
         <img src="Assests/analytics.png" alt="" width={"13%"} />
         &nbsp; &nbsp; Analytics
       </Link>
     </div>
     </Offcanvas>
    </div>
  );

}

export default Canvas;
