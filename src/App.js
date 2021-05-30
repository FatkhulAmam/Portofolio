import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import view
import Home from './Views/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Portofolio" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}
