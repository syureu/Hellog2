import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { List, View } from './index.jsx';
import Create from './create';

import Layout from '../../layout';
import Wrapper from './styles';
import './main.css';

class FinalTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _withProps = function(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  };

  render() {
    return (
      <Layout>
        <Wrapper>
          <BrowserRouter>
            <Switch>
              <div className="Mains">
                <div>
                  <Route
                    path="/FinalTest"
                    component={this._withProps(List)}
                    exact
                  />
                  <Route exact path="/FinalTest/write" component={Create} />
                  <Route path="/view/:data" component={View} />
                </div>
              </div>
            </Switch>
          </BrowserRouter>
        </Wrapper>
      </Layout>
    );
  }
}

export default FinalTest;
