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

export default function Page6() {
  let { params } = useParams();
  return (
    <div>
      <h1> {params} </h1>
      <Link to="/page3">Go to Page 3</Link>
    </div>
  );
}
