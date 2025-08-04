
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
    const productData = useSelector((state) => state.productData);
    
    const subCats = (data) => {
        return data.map(item => {
            return (
                <div className="col-md-6 col-lg-4">
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