import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/page1"> Menu </Link>
      <Link to="/page2"> Cart </Link>
      <Link to="/page3">Page 3</Link>
      
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
