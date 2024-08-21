import "./App.css";
import Home from "./componenets/Home/Home";
import Nav from "./componenets/Nav/Nav";
import { Switch, Route} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <>
      <Nav />
      <Switch>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
