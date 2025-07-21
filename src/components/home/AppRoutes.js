import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "../../Layout";
import Index from "./index"
import AboutPage from "../../pages/static/about-us"
import NotFoundPage from "../../pages/404";
import ConctactUsPage from "../../pages/static/contact-us";
import FAQPage from "../../pages/static/faq";
import RegisterAccount from "../../pages/register-account";
import { GuestRoutes, PrivateRoutes } from "./PrivateRoutes";
import { Dashboard } from "../../pages/Dashboard";
import { CustomerOrders } from "../../pages/CustomerOrders";
import { CustomerWishlist } from "../../pages/CustomerWishlist";
import { OrderDetail } from "../../pages/OrderDetail";
import { CheckoutAddress } from "../../pages/CheckoutAddress";
import { BasketPage } from "../../pages/BasketPage";
import { DeliveryMethod } from "../../pages/DeliveryMethod";
import { PaymentMethod } from "../../pages/PaymentMethod";
import { OrderReview } from "../../pages/OrderReview";
import { ProductsPage } from "../../pages/ProductsPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Index />},
//       { path: 'about-us', element: <Outlet />,
//         children: [{ index: true, element: <AboutPage /> }, { path: 'company', element: <CompanyPage /> }]
//       }
//     ],
//   }
// ]);
// export default router;

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Index />}/>
                    {/* <Route /> */}
                    <Route path="/about-us" element={<Outlet />}>
                        <Route index element={<AboutPage />} />
                        <Route path="contact" element={<ConctactUsPage />} />
                    </Route>
                    <Route element={<GuestRoutes />}>
                        <Route path="/register-account" element={<RegisterAccount />} />
                    
                    </Route>
                    <Route path="/faq" element={<FAQPage />}/>
                    <Route path="/contact" element={<ConctactUsPage />}/>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product-details" element={<ProductDetailsPage />} />
                    <Route path="/basket" element={<BasketPage />} />
                    <Route path="/checkout-address" element={<CheckoutAddress />} />
                    <Route path="/delivery-method" element={<DeliveryMethod />} />
                    <Route path="/payment-method" element={<PaymentMethod />} />
                    <Route path="/order-review" element={<OrderReview />} />
                    
                    <Route element={<PrivateRoutes />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customer-orders" element={<CustomerOrders />} />
                        <Route path="/customer-order/:id" element={<OrderDetail />} />
                        <Route path="/customer-wishlist" element={<CustomerWishlist />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;