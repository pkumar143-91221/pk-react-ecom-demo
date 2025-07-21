import React from 'react'
import { Link } from 'react-router-dom';

function LeftSidebar() {

    return (
        <div className="col-lg-3">
            <div className="card sidebar-menu mb-4">
                <div className="card-header">
                    <h3 className="h4 card-title">Pages</h3>
                </div>
                <div className="card-body">
                    <ul className="nav nav-pills flex-column">
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="nav-link">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* *** PAGES MENU END ****/}
            <div className="banner">
                <Link>
                    <img src="/img/banner.jpg" alt="sales 2014" className="img-fluid" />
                </Link>
            </div>
        </div>
    )
}

export default LeftSidebar;