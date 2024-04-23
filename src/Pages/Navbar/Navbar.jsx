import React from "react";

const Navbar = () => {
  return (
    <div style={{}}>
      <nav
        class="navbar sticky-top navbar-expand-lg "
        style={{ height: "90px", backgroundColor: "#009FFF", }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img
              style={{ width: "40px" }}
              src="/src/Pages/Navbar/shunno.png"
              alt=""
            />
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex ">
                <h4 className="ms-2 text-white">Shunno IT</h4>
                {/* <form className="d-flex" role="search">
                  <input className="form-control ms-3" style={{width:"450px",height:"35px"}} type="search" placeholder="Search" aria-label="Search"/>
                </form> */}
              </div>
            </div>
            <div>
              <button type="button" class="btn btn-primary position-relative">
                Profile
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
