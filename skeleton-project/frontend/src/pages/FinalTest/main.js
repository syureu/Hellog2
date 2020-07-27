import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Write } from './index.jsx';
import { Right_Write } from './right/index.jsx';

import Layout from '../../layout';
import Wrapper from './styles';
import './main.css';

class FinalTest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <BrowserRouter>
            <Switch>
              <div className="Mains">
                <div id="Mains-left">
                  <h3> Left Side </h3>
                  {/* {this.state.login ? ( */}
                  <h5>
                    <Link to="/FinalTest/write">식단 등록</Link>
                  </h5>
                  {/* // ) : null} */}
                </div>

                <div>
                  <Route path="/FinalTest/" component={Home} exact />
                  <Route path="/FinalTest/write" component={Write} />
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
