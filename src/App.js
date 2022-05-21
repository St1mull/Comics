import Navbar from "./Components/navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CrudContextProvider from "./contexts/CrudContextProvider";
import MainRoutes from "./Routes/MainRoutes";

function App() {
    return (
      <>
      <AuthContextProvider>
      <CrudContextProvider>
      {/* <CartContextProvider> */}

        <Navbar/>
        <MainRoutes/>
      {/* </CartContextProvider> */}
      </CrudContextProvider>
      </AuthContextProvider>
      </>
    );
  }
  
  export default App;