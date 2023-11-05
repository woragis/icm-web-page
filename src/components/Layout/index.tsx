import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { AuthProvider } from "../../contexts/AuthContext";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default Layout;
