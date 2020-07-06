import React from "react";

function Navbar(props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link navbar-brand">
          Employee Directory
        </a>
        </nav>
    )
}

export default Navbar;