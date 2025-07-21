
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../actions/loader-action';
import { useAuth } from '../../hooks/AuthContext';
export const LoginForm = (props) => {

    const [formDataLogin, setFormDataLogin] = React.useState({ email: "", password: "" });
    const [errorsLogin, setErrorsLogin] = React.useState({});
    const auth = useAuth();
    const dispatch = useDispatch();
    const validateDataLogin = () => {
        let newErrors = {}

        if (!formDataLogin.email) {
            newErrors.email = "Email is required."
        } else if (!/\S+@\S+\.\S+/.test(formDataLogin.email)) {
            newErrors.email = 'Email format is not correct.'
        }

        if (!formDataLogin.password) {
            newErrors.password = "Password is required."
        }
        setErrorsLogin(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (validateDataLogin()) {
            console.log("FormDataLogin ::>", formDataLogin);
            dispatch(showLoader(true))
            setTimeout(() => { auth.login(formDataLogin);dispatch(hideLoader(false)) }, 2000);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmitLogin} method="post">
                <div className="form-group">
                    {
                        props?.showLabel ?
                            <label htmlFor="emailLogin" className={errorsLogin.email ? "text-danger" : ""}>Email</label> :
                            ""
                    }
                    <input id="emailLogin" placeholder='Email' value={formDataLogin.email} onChange={(e) => { setFormDataLogin({ ...formDataLogin, email: e.target.value }) }} type="text" className="form-control" />
                    {errorsLogin.email && <span className="text-danger">{errorsLogin.email}</span>}
                </div>

                <div className="form-group">
                    {
                        props?.showLabel ?
                            <label htmlFor="passwordLogin" className={errorsLogin.password ? "text-danger" : ""}>Password</label>
                            : ""
                    }
                    <input id="passwordLogin" placeholder='Password' value={formDataLogin.password} onChange={(e) => { setFormDataLogin({ ...formDataLogin, password: e.target.value }) }} type="password" className="form-control" />
                    {errorsLogin.password && <span className="text-danger">{errorsLogin.password}</span>}
                </div>
                <p className="text-center">
                    <button id="closeLoginModal" type="submit" className="btn btn-primary">
                        <i className="fa fa-sign-in" /> Log in
                    </button>
                </p>
            </form>
        </>
    );
}