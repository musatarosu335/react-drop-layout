import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import LayoutAreaDefault from './Layouts/LayoutAreaDefault';
import LayoutArea1 from './Layouts/LayoutArea1';
import LayoutArea2 from './Layouts/LayoutArea2';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LayoutAreaDefault} />
        <Route exact path="/LayoutArea_1" component={LayoutArea1} />
        <Route exact path="/LayoutArea_2" component={LayoutArea2} />
      </Switch>
      <div className="button-area">
        <Link to="/"><button className="button">Default</button></Link>
        <Link to="/LayoutArea_1"><button className="button">Layout1</button></Link>
        <Link to="/LayoutArea_2"><button className="button">Layout2</button></Link>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
