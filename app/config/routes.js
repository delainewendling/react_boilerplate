let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let hashHistory = ReactRouter.hashHistory;
let Main = require('../components/Main');

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>
)

module.exports = routes;