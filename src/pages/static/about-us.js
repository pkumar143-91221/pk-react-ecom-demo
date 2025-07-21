
import LeftSidebar from '../sub-components/left-sidebar';
import Breadcrumb from '../sub-components/breadcrumb';
import { Link } from 'react-router-dom';
function AboutPage() {
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "About us"
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Breadcrumb value={breadcrumb}/>
                </div>
                <LeftSidebar />
                <div className="col-lg-9">
                    <div id="text-page" className="box">
                        <h1>Text formatting - Header level 1</h1>
                        <p className="lead">
                            This page aim is to show you the most common HTML elements
                            appearance on the website. For further reference please visit
                            official{" "}
                            <Link to="http://getbootstrap.com/css/" className="external">
                                Bootstrap website
                            </Link>
                            .
                        </p>
                        <p>
                            <strong>Pellentesque habitant morbi tristique</strong> senectus et
                            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero sit amet quam egestas semper.{" "}
                            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
                            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
                            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
                            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                            ipsum rutrum orci, sagittis tempus lacus enim ac dui.{" "}
                            <Link to="#">Donec non enim</Link> in turpis pulvinar facilisis. Ut
                            felis.
                        </p>
                        <h2>Header Level 2</h2>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ol>
                        <blockquote className="blockquote">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                                molestie gravida. Curabitur massa. Donec eleifend, libero at
                                sagittis mollis, tellus est malesuada tellus, at luctus turpis
                                elit sit amet quam. Vivamus pretium ornare est.
                            </p>
                        </blockquote>
                        <h3>Header Level 3</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                        </ul>
                        <hr />
                        <h2>Images</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="text-center">
                                    <img
                                        src="img/detailsquare.jpg"
                                        alt=""
                                        className="img-circle img-fluid"
                                    />
                                </p>
                                <p className="text-center">circle</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center">
                                    <img
                                        src="img/detailsquare.jpg"
                                        alt=""
                                        className="img-thumbnail img-fluid"
                                    />
                                </p>
                                <p className="text-center">thumbnail</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center">
                                    <img
                                        src="img/detailsquare.jpg"
                                        alt=""
                                        className="rounded-circle img-fluid"
                                    />
                                </p>
                                <p className="text-center">rounded</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.col-lg-9*/}
            </div>
        </div>

    );
}

export default AboutPage;