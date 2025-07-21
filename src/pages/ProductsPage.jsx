import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "./sub-components/breadcrumb";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ProductsPage = () => {

    const location = useLocation();
    useEffect(() => {
        console.log("Passed data ::>", location?.state)
    }, [location]);
    const productData = useSelector((state) => state.productData)
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "Products"
    ]
    const productsList = productData?.products?.map((productItem) => {
        return (
            <>
                <div className="col-lg-4 col-md-6" key={productItem.id}>
                    <div className="product">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <a href="detail.html">
                                        <img
                                            src={productItem.imageFront}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <div className="back">
                                    <a href="detail.html">
                                        <img
                                            src={productItem.imageBack}
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
                                    {productItem.name}
                                </a>
                            </h3>
                            <p className="price">
                                {productItem?.special_price ?
                                    <>
                                        <del>${productItem.price}</del>
                                        &nbsp;${productItem.special_price}
                                    </>
                                    :
                                    <>
                                        ${productItem.price}
                                    </>
                                }

                            </p>
                            <p className="buttons">
                                <Link to={"/product-details"} className="btn btn-outline-secondary">
                                    View detail
                                </Link>
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
            </>
        );
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* breadcrumb*/}
                        <Breadcrumb value={breadcrumb} />
                    </div>
                    <div className="col-lg-3">

                        <div className="card sidebar-menu mb-4">
                            <div className="card-header">
                                <h3 className="h4 card-title">Categories</h3>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-pills flex-column category-menu">
                                    <li>
                                        <a href="category.html" className="nav-link">
                                            Men <span className="badge badge-secondary">42</span>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    T-shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Pants
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Accessories
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="category.html" className="nav-link active">
                                            Ladies <span className="badge badge-light">123</span>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    T-shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Skirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Pants
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Accessories
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="category.html" className="nav-link">
                                            Kids <span className="badge badge-secondary">11</span>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    T-shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Skirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Pants
                                                </a>
                                            </li>
                                            <li>
                                                <a href="category.html" className="nav-link">
                                                    Accessories
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card sidebar-menu mb-4">
                            <div className="card-header">
                                <h3 className="h4 card-title">
                                    Brands{" "}
                                    <a href="/#" className="btn btn-sm btn-danger pull-right">
                                        <i className="fa fa-times-circle" /> Clear
                                    </a>
                                </h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Armani (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Versace (12)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Carlo Bruni (15)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Jack Honey (14)
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-default btn-sm btn-primary">
                                        <i className="fa fa-pencil" /> Apply
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="card sidebar-menu mb-4">
                            <div className="card-header">
                                <h3 className="h4 card-title">
                                    Colours{" "}
                                    <a href="/#" className="btn btn-sm btn-danger pull-right">
                                        <i className="fa fa-times-circle" /> Clear
                                    </a>
                                </h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="colour white" /> White (14)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="colour blue" /> Blue (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="colour green" /> Green (20)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="colour yellow" /> Yellow (13)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="colour red" /> Red (10)
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-default btn-sm btn-primary">
                                        <i className="fa fa-pencil" /> Apply
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* *** MENUS AND FILTERS END ****/}
                        <div className="banner">
                            <a href="/#">
                                <img src="img/banner.jpg" alt="sales 2014" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="box">
                            <h1>Ladies</h1>
                            <p>
                                In our Ladies department we offer wide selection of the best
                                products we have found and carefully selected worldwide.
                            </p>
                        </div>
                        <div className="box info-bar">
                            <div className="row">
                                <div className="col-md-12 col-lg-4 products-showing">
                                    Showing <strong>12</strong> of <strong>25</strong> products
                                </div>
                                <div className="col-md-12 col-lg-7 products-number-sort">
                                    <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                                        <div className="products-number">
                                            <strong>Show</strong>
                                            <a href="/#" className="btn btn-sm btn-primary">
                                                12
                                            </a>
                                            <a href="/#" className="btn btn-outline-secondary btn-sm">
                                                24
                                            </a>
                                            <a href="/#" className="btn btn-outline-secondary btn-sm">
                                                All
                                            </a>
                                            <span>products</span>
                                        </div>
                                        <div className="products-sort-by mt-2 mt-lg-0">
                                            <strong>Sort by</strong>
                                            <select name="sort-by" className="form-control">
                                                <option>Price</option>
                                                <option>Name</option>
                                                <option>Sales first</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row products">
                            {
                                productsList
                            }

                            {/* /.products*/}
                        </div>
                        <div className="pages">
                            <p className="loadMore">
                                <a href="/#" className="btn btn-primary btn-lg">
                                    <i className="fa fa-chevron-down" /> Load more
                                </a>
                            </p>
                            <nav
                                aria-label="Page navigation example"
                                className="d-flex justify-content-center"
                            >
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a href="/#" aria-label="Previous" className="page-link">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="/#" className="page-link">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="/#" className="page-link">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="/#" className="page-link">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="/#" className="page-link">
                                            4
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="/#" className="page-link">
                                            5
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="/#" aria-label="Next" className="page-link">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* /.col-lg-9*/}
                </div>
            </div>
        </>
    );
}
