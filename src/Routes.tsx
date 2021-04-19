import { Router, Route, Switch } from "react-router-dom";
import history from "../src/utils/History";
import HomePage from "../src/pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import ErrorPage from "./components/ErrorPage";
import PageNotFound from "./components/PageNotFound";
import CoreSetup from "./components/setup/CoreSetup";
import TestComponent from "./components/TestComponent";

export default function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ruleau" component={HomePage} />
        <Route exact path="/setup" component={CoreSetup} />
        <Route exact path="/ruleau/setup" component={CoreSetup} />

        <Route exact path="/process/:processId" component={ProcessPage} />
        <Route exact path="/process/:processId/cases" component={ProcessPage} />
        <Route exact path="/process/:processId/rules" component={ProcessPage} />

        <Route
          exact
          path="/ruleau/process/:processId"
          component={ProcessPage}
        />
        <Route
          exact
          path="/ruleau/process/:processId/cases"
          component={ProcessPage}
        />
        <Route
          exact
          path="/ruleau/process/:processId/rules"
          component={ProcessPage}
        />

        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />

        <Route
          exact
          path="/ruleau/process/:processId/statistics"
          component={ProcessPage}
        />

        <Route
          exact
          path="/process/:processId/case/:caseId"
          component={CasePage}
        />

        <Route
          exact
          path="/ruleau/process/:processId/case/:caseId"
          component={CasePage}
        />
        <Route exact path="/error" component={ErrorPage} />
        <Route exact path="/ruleau/error" component={ErrorPage} />
        <Route exact path="/test" component={TestComponent} />
        <Route exact path="/ruleau/test" component={TestComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
