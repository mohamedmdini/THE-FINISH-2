import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router ,
Navigate , 

Route , 
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navigate>
        <Route exact path="/">
          {user ? <Home /> : <Navigate to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Navigate to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Navigate to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Navigate>
    </Router>
  );
};

export default App;