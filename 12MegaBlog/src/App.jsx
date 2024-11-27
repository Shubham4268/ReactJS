import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Header, Footer, Container } from "./components/index";
import { Outlet } from "react-router-dom";
import "./App.css";
import { blogbg } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  /* As soon as the page is loaded, we get the current user from the appwrite server, if the user is present i.e. logged in, we sent the userdata to store and the status on store is changed to true. if user is not present we still shange the state to logout, so that state always remain updated. As the data is done being fetched from server, we set loadding to false. */

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <div
      className="min-h-screen flex flex-wrap
    content-between "
    style={{
      backgroundColor : "#FFFBBB"
    }}
    >
      <div className="w-full block relative ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : (
    <Container>
      <div>
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    </Container>
  );
}

export default App;
