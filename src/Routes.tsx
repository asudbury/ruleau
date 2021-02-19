import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../src/pages/HomePage";
import ProcessPage from './pages/ProcessPage';
import CasePage from './pages/CasePage';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ruleau" component={HomePage} />

        <Route exact path="/process/:processId" component={ProcessPage} />
        <Route exact path="/process/:processId/cases" component={ProcessPage} />
        <Route exact path="/process/:processId/rules" component={ProcessPage} />
        <Route exact path="/process/:processId/statistics" component={ProcessPage} />

        <Route exact path="/process/:processId/case/:caseId" component={CasePage} />
      </Switch>
    </BrowserRouter>
  );
}