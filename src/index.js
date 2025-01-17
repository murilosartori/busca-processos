import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  //criar servidor
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat'
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
