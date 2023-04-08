import { createContext, useState } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

export const productContainer = createContext([]);
export const cartContainer = createContext([]);

const App = () => {
  const navigation = useNavigation();
  const {cartProducts, allItems} = useLoaderData();
  const [cartItems, setCartProducts] = useState(cartProducts);

  return (
    <productContainer.Provider value={allItems}>
       <cartContainer.Provider value={[cartItems,setCartProducts]}>
       <Header />
       {
        navigation.state === 'loading' ? <Loading /> : <Outlet />
       }
       <Footer />
       </cartContainer.Provider>
    </productContainer.Provider>
  )
}

export default App;
