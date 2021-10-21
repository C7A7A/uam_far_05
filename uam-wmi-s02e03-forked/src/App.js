import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>

      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}