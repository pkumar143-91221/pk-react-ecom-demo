import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductData, userLogin, userLogout } from "../actions/user-action";
import productData from "../data.json";

const AuthContext = React.createContext(null);

export const AuthProvider = ( { children }) => {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    React.useEffect(() => {
        const storedUser = localStorage.getItem("website::user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            dispatch(userLogin(JSON.parse(storedUser)));
            dispatch(addProductData({category: productData.category, products: productData.products}));
        }
    }, [dispatch]);
    const login = (data) => {
        if (data) {
            setUser(data);
            localStorage.setItem("website::user", JSON.stringify(data));
            dispatch(userLogin(data));
            navigate("/dashboard");
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("website::user");
        dispatch(userLogout(null));   
        navigate("/");
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user
    }

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return React.useContext(AuthContext);
}