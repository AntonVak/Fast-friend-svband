import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./layout/login";
import Main from "./layout/main";
import NavBar from "./components/ui/navBar";
import UsersListPage from "./components/page/usersListPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={UsersListPage} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
