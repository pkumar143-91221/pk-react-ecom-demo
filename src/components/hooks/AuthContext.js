import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

export const AuthProvider = ( { children }) => {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    React.useEffect(() => {
        const storedUser = localStorage.getItem("website::user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])
    const login = (data) => {
        if (data) {
            setUser(data);
            localStorage.setItem("website::user", JSON.stringify(data));
            navigate("/dashboard");
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("website::user");
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