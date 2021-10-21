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

import Page6 from "./Page6";

export default function Page1() {
  const match = useRouteMatch();

  return (
    <div>
      <h1> Page 1 </h1>

      <Link to="/page2">Redirect to page 2</Link>
      <Link to={`${match.url}/value`}> Link with id</Link>

      <Switch>
        <Route exact path={`${match.url}/:id`} component={Page6} />
      </Switch>
    </div>
  );
}
