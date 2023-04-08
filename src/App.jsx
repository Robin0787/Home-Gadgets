import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
  const navigation = useNavigation();
  const items = useLoaderData();
  return (
    <div>
       <Header items={items}/>
       {
        navigation.state === 'loading' ? <Loading /> : <Outlet />
       }
       <Footer />
    </div>
  )
}

export default App;
