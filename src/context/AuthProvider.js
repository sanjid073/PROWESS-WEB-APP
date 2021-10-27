import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';
import useProducts from '../hooks/useProducts';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const firebaseContext = useFirebase();
    const {products} = useProducts();
    const {selected, setSelected, addToCart} = useCart();
    const data = {firebaseContext, products,selected, setSelected, addToCart};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;