import "./App.css";
import DigitsPage from "./components/DigitsPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/digits">
          <DigitsPage />
        </Route>
        <Redirect from="/" to="/digits" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
