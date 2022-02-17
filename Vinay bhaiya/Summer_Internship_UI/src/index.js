import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import Grid from './components/Grid'
import { createStore } from "redux";

import myStore from "./reducers/myStore"

/*const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

ReactDOM.render(
  <Provider store={myStore}>
    <MuiThemeProvider theme={theme}>
      <Header/>
      <Grid/>
    </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );
*/
serviceWorker.unregister();


