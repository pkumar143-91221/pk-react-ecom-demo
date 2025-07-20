import React from 'react'
import LeftSidebar from '../../components/includes/left-sidebar';
import Breadcrumb from '../../components/includes/breadcrumb';
import { Link } from 'react-router-dom';

function FAQPage() {
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "FAQ"
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Breadcrumb value={breadcrumb} />
                </div>
                <LeftSidebar />
                <div className="col-lg-9">
                    <div id="contact" className="box">
                        <h1>Frequently asked questions</h1>
                        <p className="lead">
                            Are you curious about something? Do you have some kind of problem
                            with our products?
                        </p>
                        <p>
                            Please feel free to contact us, our customer service center is
                            working for you 24/7.
                        </p>
                        <hr />
                        <div id="accordion">
                            <div className="card border-primary mb-3">
                                <div id="headingOne" className="card-header p-0 border-0">
                                    <h4 className="mb-0">
                                        <a
                                            href="#"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                            className="btn btn-primary d-block text-left rounded-0"
                                        >
                                            1. What to do if I have still not received the order?
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    id="collapseOne"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                    className="collapse show"
                                >
                                    <div className="card-body">
                                        <p>
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                            eu libero sit amet quam egestas semper. Aenean ultricies mi
                                            vitae est. Mauris placerat eleifend leo.
                                        </p>
                                        <ul>
                                            <li>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            </li>
                                            <li>Aliquam tincidunt mauris eu risus.</li>
                                            <li>Vestibulum auctor dapibus neque.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-primary mb-3">
                                <div id="headingTwo" className="card-header p-0 border-0">
                                    <h4 className="mb-0">
                                        <a
                                            href="#"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                            className="btn btn-primary d-block text-left rounded-0"
                                        >
                                            2. What are the postal rates?
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    id="collapseTwo"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                    className="collapse"
                                >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you
                                        probably haven't heard of them accusamus labore sustainable
                                        VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card border-primary">
                                <div id="headingThree" className="card-header p-0 border-0">
                                    <h4 className="mb-0">
                                        <a
                                            href="#"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                            className="btn btn-primary d-block text-left rounded-0"
                                        >
                                            3. Do you send overseas?
                                        </a>
                                    </h4>
                                </div>
                                <div
                                    id="collapseThree"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordion"
                                    className="collapse"
                                >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                        aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                        beer labore wes anderson cred nesciunt sapiente ea proident.
                                        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you
                                        probably haven't heard of them accusamus labore sustainable
                                        VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.accordion*/}
                    </div>
                </div>
                {/* /.col-lg-9*/}
            </div>
        </div>

    )
}

export default FAQPage;