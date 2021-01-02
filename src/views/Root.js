import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicTemplate } from 'templates/BasicTemplate';
import { Home } from 'views/Home';
import { Contact } from 'views/Contact';
import { Bags } from 'views/Bags';
import { About } from './About';
import { Category } from './Category';
import { Shawl } from './Shawl';
import { Clothes } from './Clothes';
import { Blanket } from './Blanket';
import { Mascots } from './Mascots';

export const Root = () => (
  <BasicTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/category" component={Category} />
        <Route path="/bags" component={Bags} />
        <Route path="/about" component={About} />
        <Route path="/shawl" component={Shawl} />
        <Route path="/cloth" component={Clothes} />
        <Route path="/blanket" component={Blanket} />
        <Route path="/mascots" component={Mascots} />
      </Switch>
    </BrowserRouter>
  </BasicTemplate>
);
