
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { LoginForm } from '../../pages/sub-components/LoginForm';
import { HeaderMenu } from './HeaderMenu';
import { useTranslation } from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);
    const [theme, setTheme] = React.useState(() => {
        const storedValue = localStorage.getItem('website::theme');
        return storedValue !== null ? storedValue : 'style.default.css';
    });

    const onChangeTheme = (css) => {
        setTheme(css);
        var sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = '/css/' + css;
        sheet.id = "theme-stylesheet"
        sheet.type = 'text/css';
        document.head.appendChild(sheet);
        localStorage.setItem("website::theme", css);
        console.log("Selected Theme::>", theme);
        setTimeout(() => { document.querySelectorAll("link#theme-stylesheet")[0].remove(); }, 100);
    }

    const onLanguageChange = (lng) => {
        setCurrentLanguage(lng);
        i18n.changeLanguage(lng);
    }
    // useEffect( () => {
    //     if (window.$){
    //         window.$("#closeLoginModal").on("click", function() {
    //             window.$("#login-modal").modal("hide")
    //         })
    //     }
    // }, []);
    // const handleLoginModal = () => {
    //     if (window.$){
    //         window.$("#closeLoginModal").on("click", function() {
    //             window.$("#login-modal").modal("hide")
    //         })
    //     }
    // }
    const [search, setSearch] = React.useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const searchProducts = (e) => {
        e.preventDefault();
        console.log("Search ::>", search);
        navigate("/products", { state: { search: search } });
        setTimeout(() => { setSearch("") }, 200)
    }

    return (
        <>
            <header className="header mb-5">
                <div id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offer mb-3 mb-lg-0"><Link to="#" className="btn btn-success btn-sm">Offer of the day</Link><Link to="#" className="ml-1">Get flat 35% off on orders over $50!</Link></div>
                            <div className="col-lg-6 text-center text-lg-right">
                                <ul className="menu list-inline mb-0">
                                    {
                                        auth.isAuthenticated ?
                                            <>
                                                <li className="list-inline-item">
                                                    <Link to="/dashboard">
                                                        {
                                                            auth.firstname ? "Welcome " + auth.firstname : "Welcome User"
                                                        }
                                                    </Link>
                                                </li>
                                            </> :
                                            <>
                                                <li className="list-inline-item"><Link to="#" data-toggle="modal" data-target="#login-modal">Login</Link></li>
                                                <li className="list-inline-item"><Link to="register-account">Register</Link></li>
                                            </>
                                    }
                                    <li className="list-inline-item">
                                        <select defaultValue={currentLanguage} onChange={(e) => onLanguageChange(e.target.value)} className="form-select form-select-lg border-0" aria-label=".form-select-lg example">
                                            <option value='en'>{t("languages.English")}</option>
                                            <option value='hi'>{t("languages.Hindi")}</option>
                                        </select>
                                    </li>
                                    {/* <li className="list-inline-item"><Link to="#">Recently viewed</Link></li> */}
                                    <li className="list-inline-item">
                                        <select defaultValue={theme} onChange={(e) => onChangeTheme(e.target.value)} className="form-select form-select-lg border-0" aria-label=".form-select-lg example">
                                            
                                            <option value='style.default.css'>Default</option>
                                            <option value='style.blue.css'>Blue</option>
                                            <option value='style.green.css'>Green</option>
                                            <option value='style.red.css'>Red</option>
                                            <option value='style.pink.css'>Pink</option>
                                            <option value='style.sea.css'>Sea</option>
                                            <option value='style.violet.css'>Violet</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Customer login</h5>
                                    <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                                </div>
                                <div className="modal-body">
                                    <LoginForm />
                                    <p className="text-center text-muted">Not registered yet?</p>
                                    <p className="text-center text-muted"><Link to="/register-account"><strong id="closeLoginModal" >Register now</strong></Link>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container"><Link to="/" className="navbar-brand home"><img src="/img/logo.png" alt="Obaju logo" className="d-none d-md-inline-block" /><img src="/img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" /><span className="sr-only">Obaju - go to homepage</span></Link>
                        <div className="navbar-buttons">
                            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i></button>
                            <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle search</span><i className="fa fa-search"></i></button><Link to="basket" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart"></i></Link>
                        </div>
                        <div id="navigation" className="collapse navbar-collapse">
                            <HeaderMenu />
                            <div className="navbar-buttons d-flex justify-content-end">
                                <div id="search-not-mobile" className="navbar-collapse collapse"></div><a data-toggle="collapse" href="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block"><span className="sr-only">Toggle search</span><i className="fa fa-search"></i></a>
                                <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block"><Link to="/basket" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart"></i><span>3 items in cart</span></Link></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="search" className="collapse">
                    <div className="container">
                        <form id="closeHeaderSearch" onSubmit={(e) => searchProducts(e)} role="search" className="ml-auto">
                            <div className="input-group">
                                <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="form-control" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;