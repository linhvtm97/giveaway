// import React from 'react';
// import Main from './components/main/Main';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {this.showContentMenus(routes)}
        <Footer />
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        console.log(route);
        return (
          route &&
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    console.log(result);
    return <Switch>{result}</Switch>;
  }
}

export default App;
