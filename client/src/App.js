import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import Builder from "./views/Editor/Builder";
import { PrivateRoute } from "./components/PrivateRoute";
import Auth from "./views/Auth/Auth";
import { Login } from "./views/Auth/Login";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";

function App() {
  console.log(process.env.REACT_APP_ENV);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/resume/:id" element={<Builder />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
