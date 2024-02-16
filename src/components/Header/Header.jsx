import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky-top bg-white">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="img-fluid mr-3 logo-image"
                            alt="Logo"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    activeClassName="text-orange-700"
                                    className="nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    activeClassName="text-orange-700"
                                    className="nav-link"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    activeClassName="text-orange-700"
                                    className="nav-link"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/github"
                                    activeClassName="text-orange-700"
                                    className="nav-link"
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/user"
                                    activeClassName="text-orange-700"
                                    className="nav-link"
                                >
                                    User
                                </NavLink>
                            </li>
                        </ul>
                        <div className="ml-auto">
                            <Link
                                to="#"
                                className="btn btn-outline-primary mr-2"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="btn btn-primary"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
