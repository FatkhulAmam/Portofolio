import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import view
import Home from './Views/Home';
import Contact from './Views/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portofolio" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
}
