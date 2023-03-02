import React from "react";
import "./Header.css";
// eslint-disable-next-line
import { Link} from "react-router-dom";
const Header = () => {

  
  const logoutHandler =()=>{
    // dispatch(authActions.logout());
  }
  return (
    <header>
      <nav className="header-nav">
        {/* <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              RBC- CMDS
            </h2>
          </li>
          <li>
            <a href="#">Patient</a>
          </li>
          <li>
          <a href="#">Referal</a>
          </li>
          
          <li>
            <a href="#">Consultation</a>
          </li>
          
          
          <li>
            <a onClick={logoutHandler} className="logout-btn">Logout</a>
          </li>
        </ul> */}


<ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              RBC- CMDS
            </h2>
          </li>
          <li>
            <a href="/add">Patient</a>
          </li>
          <li>
          <a href="/referal">Referal</a>
          </li>
          
          <li>
            <a href="/consultation">Consultation</a>
          </li>
          
          
          <li>
            <a href="!#" onClick={logoutHandler} className="logout-btn">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
