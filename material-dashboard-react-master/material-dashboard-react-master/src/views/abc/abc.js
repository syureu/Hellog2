import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./routes/List";
import Read from "./routes/Read";
import Write from "./routes/Write";
class abc extends Component {
  render() {
    return (
      <div>
        {/* <div className="lnk"> <ul> <li> <Link to="/">List</Link> </li> <li> <Link to="/read">Read</Link> </li> <li> <Link to="/write">Write</Link> </li> </ul> </div> */}
        <div className="route">
          <Route exact path="/admin/abc" component={List} />
          <Route path="/admin/abc/read/:id?" component={Read} />
          <Route path="/admin/abc/write" component={Write} />
        </div>
      </div>
    );
  }
}
export default abc;
