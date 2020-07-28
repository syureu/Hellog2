import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { List, Write, View } from './index.jsx';
import { Right_Write } from './right/index.jsx';
import { Category } from './left/index.jsx';

import Layout from '../../layout';
import Wrapper from './styles';
import './main.css';

class FinalTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }

  _changeCategory = target => {
    this.setState({ category: target });
    sessionStorage.setItem('category', target);
  };

  _withProps = function(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  };

  render() {
    const { _changeCategory } = this;

    return (
      <Layout>
        <Wrapper>
          <BrowserRouter>
            <Switch>
              <div className="Mains">
                <div id="Mains-left">
                  <br />
                  <h5>
                    <Link to="/FinalTest/write">식단 등록</Link>
                  </h5>
                  {/* // ) : null} */}
                  <hr />
                  <Route
                    path="/FinalTest"
                    render={props => (
                      <Category _changeCategory={_changeCategory} />
                    )}
                    exact
                  />
                </div>

                <div>
                  <Route
                    path="/FinalTest"
                    component={this._withProps(List, {
                      category: this.state.category,
                    })}
                    exact
                  />

                  <Route path="/FinalTest/write" component={Write} />
                  <Route path="/view/:data" component={View} />
                </div>

                <div id="Mains-right">
                  <Route path="/FinalTest/write" component={Right_Write} />
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
