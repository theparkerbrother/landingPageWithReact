import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    {/* Font Awesome Icon */}
                    <i className="fa-solid fa-copyright me-2"></i>
                    {/* Brand Text */}
                    <span>Brand</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-end w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Item 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Item 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu Item 3</a>
                        </li>
                        {/* Account Dropdown */}
                        <li className="nav-item dropdown ms-lg-auto">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center justify-content-end"
                                href="#"
                                id="accountDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-user me-2"></i>
                                <span>Account</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end text-end"
                                aria-labelledby="accountDropdown"
                            >
                                <li><a className="dropdown-item" href="#">Sign In</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
