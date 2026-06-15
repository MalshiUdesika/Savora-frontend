import {
  Toaster
} from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <>

      <Toaster position="top-right"/>
      
      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );

}

export default App;