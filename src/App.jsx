import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
  const navigation = useNavigation();
  return (
    <div>
       <Header />
       {
        navigation.state === 'loading' ? <Loading /> : <Outlet />
       }
       <Footer />
    </div>
  )
}

export default App;
