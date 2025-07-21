import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductData, userLogin, userLogout } from "../actions/user-action";
// import productData from "../data.json";

const AuthContext = React.createContext(null);

export const AuthProvider = ( { children }) => {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productData = {
    "category": [
        {
            "id": 1,
            "name": "Men",
            "subCategory": [
                {
                    "id": "",
                    "name": "Clothing",
                    "items": [
                        {
                            "id": "",
                            "name": "TShirts"
                        },
                        {
                            "id": "",
                            "name": "Shirts"
                        },
                        {
                            "id": "",
                            "name": "Jackets"
                        },
                        {
                            "id": "",
                            "name": "Trousers"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Shoes",
                    "items": [
                        {
                            "id": "",
                            "name": "Format Shoes"
                        },
                        {
                            "id": "",
                            "name": "Slipper"
                        },
                        {
                            "id": "",
                            "name": "Casulat Shoes"
                        },
                        {
                            "id": "",
                            "name": "Sports Shoes"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Gadgets",
                    "items": [
                        {
                            "id": "",
                            "name": "Wrist Band"
                        },
                        {
                            "id": "",
                            "name": "Watches"
                        },
                        {
                            "id": "",
                            "name": "Ear Pods"
                        }
                    ]
                }
            ]
        },
        {
            "id": 1,
            "name": "Ladies",
            "subCategory": [
                {
                    "id": "",
                    "name": "Clothing",
                    "items": [
                        {
                            "id": "",
                            "name": "Sharee"
                        },
                        {
                            "id": "",
                            "name": "Suits"
                        },
                        {
                            "id": "",
                            "name": "Inner Garments"
                        },
                        {
                            "id": "",
                            "name": "Office Wear"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Shoes",
                    "items": [
                        {
                            "id": "",
                            "name": "Sandals"
                        },
                        {
                            "id": "",
                            "name": "Slipper"
                        },
                        {
                            "id": "",
                            "name": "Footwear"
                        },
                        {
                            "id": "",
                            "name": "Sports Shoes"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Accessories",
                    "items": [
                        {
                            "id": "",
                            "name": "Necklaces"
                        },
                        {
                            "id": "",
                            "name": "Watches"
                        },
                        {
                            "id": "",
                            "name": "Ear Rings"
                        }
                    ]
                }
            ]
        },
        {
            "id": 1,
            "name": "Kids",
            "subCategory": [
                {
                    "id": "",
                    "name": "Clothing",
                    "items": [
                        {
                            "id": "",
                            "name": "TShirts"
                        },
                        {
                            "id": "",
                            "name": "Shirts"
                        },
                        {
                            "id": "",
                            "name": "Jackets"
                        },
                        {
                            "id": "",
                            "name": "Trousers"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Shoes",
                    "items": [
                        {
                            "id": "",
                            "name": "Format Shoes"
                        },
                        {
                            "id": "",
                            "name": "Slipper"
                        },
                        {
                            "id": "",
                            "name": "Casulat Shoes"
                        },
                        {
                            "id": "",
                            "name": "Sports Shoes"
                        }
                    ]
                },
                {
                    "id": "",
                    "name": "Gadgets",
                    "items": [
                        {
                            "id": "",
                            "name": "Wrist Band"
                        },
                        {
                            "id": "",
                            "name": "Watches"
                        },
                        {
                            "id": "",
                            "name": "Ear Pods"
                        }
                    ]
                }
            ]
        }
    ],
    "products": [
        {
            "id": 12301,
            "name": "Fur Coat",
            "price": "200",
            "special_price": "",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product1.jpg",
            "imageBack": "/img/product1_2.jpg"
        },
        {
            "id": 12302,
            "name": "White Blouse Armani",
            "price": "150",
            "special_price": "",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product2.jpg",
            "imageBack": "/img/product2_2.jpg"
        },
        {
            "id": 12304,
            "name": "Black Blouse Versace",
            "price": "120",
            "special_price": "",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product3.jpg",
            "imageBack": "/img/product3_2.jpg"
        },
        {
            "id": 12308,
            "name": "Black Blouse Versace",
            "price": "120",
            "special_price": "100",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product3.jpg",
            "imageBack": "/img/product3_2.jpg"
        },
        {
            "id": 12306,
            "name": "Fur Coat",
            "price": "200",
            "special_price": "",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product1.jpg",
            "imageBack": "/img/product1_2.jpg"
        },
        {
            "id": 12307,
            "name": "White Blouse Armani",
            "price": "150",
            "special_price": "",
            "availableForSale": true,
            "availableForGift": true,
            "isNew": true,
            "imageFront": "/img/product2.jpg",
            "imageBack": "/img/product2_2.jpg"
        }
        
    ]
}
    React.useEffect(() => {
        const storedUser = localStorage.getItem("website::user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            dispatch(userLogin(JSON.parse(storedUser)));
        }
        dispatch(addProductData({category: productData.category, products: productData.products}));
    }, []);
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