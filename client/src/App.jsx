import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";

const App = () => {
  return <div>
  <Router>

      <Route exact path="/" component={Home}/>
      <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
      <Route exact path="/restaurants/:id" component={RestaurantDetailPage}/>

  </Router>
  </div>
}

export default App;
