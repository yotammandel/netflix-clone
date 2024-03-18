import "./App.css";
import Home from "./componenets/Home/Home";
import Actors from "./componenets/actors/Actors";
import Nav from "./componenets/Nav/Nav";
import { Switch, Route} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
