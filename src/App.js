import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Main from "./pages/main";
import NavBar from "./components/navBar";
import Users from "./components/users";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
