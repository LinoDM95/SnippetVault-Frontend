import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Vault_Snippets from "./pages/vault/Vault_Snippets";
import Snippet_Hub from "./pages/vault/Snippet_Hub";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";

import Header from "./components/header";
import { AuthProvider, AuthContext } from "./utils/auth_context";
import { SnippetProvider } from "./utils/snippet_context";
import { SearchProvider } from "./utils/searchbar_context";
import PrivateRoute from "./utils/private_route";
import { useContext } from "react";



/**
 *
 * TODO: DOCU
 */

const AppLayout = () => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const hideHeader =
    location.pathname === "/" ||
    location.pathname.toLowerCase() === "/register";
 
  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>...</p>;
  }

  return (
    <div className="h-screen flex flex-col">
      {!hideHeader && (
        <div className="w-screen h-16 fixed top-0 left-0 z-50 flex items-center px-4 bg-primary">
          <Header />
        </div>
      )}
      ^
      <div>

        <div className={`pt-15  md:mx-48`}>
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/Snippet_Table" element={<Vault_Snippets />} />
              <Route path="/Snippet_Hub" element={<Snippet_Hub />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <SnippetProvider>
        <SearchProvider>
          <Router>
            <AppLayout />
          </Router>
        </SearchProvider>
      </SnippetProvider>
    </AuthProvider>
  );
};

export default App;
