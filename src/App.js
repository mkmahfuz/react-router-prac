

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendDeatils from "./components/FriendDetails/FriendDeatils";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/friend/:id'>
          <FriendDeatils/>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
