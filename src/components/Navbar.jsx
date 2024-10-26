import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary"
      aria-label="Ninth navbar example"
    >
      <div class="container-xl">
        <a class="navbar-brand mx-5 " href="#">
          SKILL SPHERE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07XL">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active mx-5" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-5" aria-current="page" href="#">
                Host
              </a>
            </li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button class="btn btn-warning">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
