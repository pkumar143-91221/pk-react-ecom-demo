import { Link } from "react-router-dom";
import Breadcrumb from "../components/includes/breadcrumb";

const NotFoundPage = () => {
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Page not found"
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Breadcrumb value={breadcrumb} />
                        <div id="error-page" className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="box text-center py-5">
                                    <p className="text-center"><img src="/img/logo.png" alt="Obaju template" /></p>
                                    <h3>We are sorry - this page is not here anymore</h3>
                                    <h4 className="text-muted">Error 404 - Page not found</h4>
                                    <p className="text-center">To continue please use the <strong>Search form</strong> or <strong>Menu</strong> above.</p>
                                    <p className="buttons">
                                        <Link to="/" className="btn btn-primary">
                                            <i className="fa fa-home"></i> Go to Homepage
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;