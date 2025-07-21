import { Link } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { CustomerSidebar } from "./sub-components/CustomerSidebar";

export const CustomerWishlist = () => {
    const breadcrumb = [
        <Link to="/dashboard">Home</Link>,
        "My Wishlist"
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* breadcrumb*/}
                        <Breadcrumb value={breadcrumb}/>
                    </div>
                    <div className="col-lg-3">
                        <CustomerSidebar />
                        {/* /.col-lg-3*/}
                        {/* *** CUSTOMER MENU END ****/}
                    </div>
                    <div id="wishlist" className="col-lg-9">
                        
                        <div className="box">
                            <h1>My wishlist</h1>
                            <p className="lead">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas.
                            </p>
                        </div>
                        <div className="row products">
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product1.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product1_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product1.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">
                                                Fur coat with very but very very long name
                                            </a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">White Blouse Armani</a>
                                        </h3>
                                        <p className="price">
                                            <del>$280</del>$143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                    <div className="ribbon sale">
                                        <div className="theribbon">SALE</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">Black Blouse Versace</a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">Black Blouse Versace</a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">White Blouse Versace</a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product1.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product1_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product1.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">Fur coat</a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product2_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">White Blouse Armani</a>
                                        </h3>
                                        <p className="price">
                                            <del>$280</del>$143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                    <div className="ribbon sale">
                                        <div className="theribbon">SALE</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background" />
                                    </div>
                                    {/* /.ribbon*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img
                                                        src="img/product3_2.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <div className="text">
                                        <h3>
                                            <a href="detail.html">Black Blouse Versace</a>
                                        </h3>
                                        <p className="price">
                                            <del />
                                            $143.00
                                        </p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-outline-secondary">
                                                View detail
                                            </a>
                                            <a href="basket.html" className="btn btn-primary">
                                                <i className="fa fa-shopping-cart" />
                                                Add to cart
                                            </a>
                                        </p>
                                    </div>
                                    {/* /.text*/}
                                </div>
                                {/* /.product            */}
                            </div>
                            {/* /.products*/}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}