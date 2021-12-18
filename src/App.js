import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import TopBar from "./TopBar/TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single></Single>
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
