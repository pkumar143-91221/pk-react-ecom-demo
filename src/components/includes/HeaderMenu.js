import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
    React.useEffect(() => {
        const theme = localStorage.getItem("website::theme")
        if (theme)
            clickMe(theme);
    }, []);
    const clickMe = (css) => {
        var sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = '/css/' + css;
        sheet.id = "theme-stylesheet"
        sheet.type = 'text/css';
        document.head.appendChild(sheet);
        localStorage.setItem("website::theme", css);
        setTimeout(() => { document.querySelectorAll("link#theme-stylesheet")[0].remove(); }, 100);
    }
    const productData = useSelector((state) => state.productData);
    
    const subCats = (data) => {
        return data.map(item => {
            return (
                <div className="col-md-6 col-lg-3">
                    <h5>{item.name}</h5>
                    <ul className="list-unstyled mb-3">
                        {
                            item.items.map((child) => {
                                return (<li className="nav-item"><Link to="/products" className="nav-link">{child.name}</Link></li>);
                            })
                        }
                    </ul>
                </div>
            );
        })
    }
    const listMenu = productData?.category?.map((item) => {
        return (
            <li className="nav-item dropdown menu-large"><Link to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" className="dropdown-toggle nav-link">{item.name}<b className="caret"></b></Link>
                <ul className="dropdown-menu megamenu">
                    <li>
                        <div className="row">
                            {
                                subCats(item.subCategory)
                            }
                            <div className="col-md-6 col-lg-3">
                                <h5>Change Theme</h5>
                                    <ul className="list-unstyled mb-3">
                                        <li className="nav-item"><a onClick={() => clickMe('style.default.css')} href="#/">Default</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.blue.css')} href="#/">Blue</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.green.css')} href="#/">green</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.red.css')} href="#/">Red</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.pink.css')} href="#/">Pink</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.sea.css')} href="#/">Sea</a></li>
                                        <li className="nav-item"><a onClick={() => clickMe('style.violet.css')} href="#/">Violet</a></li>
                                    </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    });
    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to="#" className="nav-link active">Home</Link></li>
                {
                    listMenu
                }
            </ul>
        </>
    );
}