import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/includes/breadcrumb';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../actions/loader-action';
import { useAuth } from '../components/hooks/AuthContext';
import { LoginForm } from '../components/includes/LoginForm';

function RegisterAccount() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const auth = useAuth();

    useEffect(() => {
        console.log("Errors ::>", errors);
    }, [errors]);

    const validateData = () => {
        let newErrors = {}
        if (!formData.name) {
            newErrors.name = "Name is required."
        }
        if (!formData.email) {
            newErrors.email = "Email is required."
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email format is not correct.'
        }

        if (!formData.password) {
            newErrors.password = "Password is required."
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 character."
        } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?:{}|<>])(?=.*\d).+$/.test(formData.password)) {
            newErrors.password = "Password must be having one digit, one capital & one special character."
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateData()) {
            console.log("FormData ::>", formData);
            dispatch(showLoader(true))
            setTimeout(() => { dispatch(hideLoader(false)) }, 2000);
        }
    }
    const breadcrumb = [
        <Link to="/">Home</Link>,
        "New account / Sign in"
    ]
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Breadcrumb value={breadcrumb} />
                    </div>
                    <div className="col-lg-6">
                        <div className="box">
                            <h1>New account</h1>
                            <p className="lead">Not our registered customer yet?</p>
                            <p>
                                With registration with us new world of fashion, fantastic discounts and
                                much more opens to you! The whole process will not take you more than a
                                minute!
                            </p>
                            <p className="text-muted">
                                If you have any questions, please feel free to{" "}
                                <Link to="/contact">contact us</Link> , our customer service center is
                                working for you 24/7.
                            </p>
                            <hr />

                            <form onSubmit={handleSubmit} method="post">
                                <div className="form-group">
                                    <label htmlFor="name" className={errors.name ? "text-danger" : ""}>Name</label>
                                    <input id="name" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} type="text" className="form-control {}" />
                                    {errors.name && <span className="text-danger">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailRegister" className={errors.email ? "text-danger" : ""}>Email</label>
                                    <input id="emailRegister" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type="text" className="form-control" />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="passwordRegister" className={errors.password ? "text-danger" : ""}>Password</label>
                                    <input id="passwordRegister" value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} type="password" className="form-control" />
                                    {errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-user-md" /> Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box">
                            <h1>Login</h1>
                            <p className="lead">Already our customer?</p>
                            <p className="text-muted">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                                egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                                eleifend leo.
                            </p>
                            <hr />
                            <LoginForm showLabel={true}/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default RegisterAccount;