import { createContext, useState } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import MyModal from "./components/Modal";

export const productContainer = createContext([]);
export const cartContainer = createContext([]);

const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const {cartProducts, allItems} = useLoaderData();
  const [cartItems, setCartProducts] = useState(cartProducts);
  const cartAlert = sessionStorage.getItem('alert');

  if(cartItems.length > 0 && cartAlert !== 'true'){
    setIsOpen(true);
    sessionStorage.setItem('alert', true);
  }
  return (
    <productContainer.Provider value={allItems}>
       <cartContainer.Provider value={[cartItems,setCartProducts]}>
       <Header />
       {
        navigation.state === 'loading' ? <Loading /> : <Outlet />
       }
       <Footer />
       <MyModal isOpen={isOpen} setIsOpen={setIsOpen}/>
       </cartContainer.Provider>
    </productContainer.Provider>
  )
}

export default App;
