import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, BrowserRouter, browserHistory } from 'react-router-dom';
import './assets/styles/base.scss';
import 'sweetalert/dist/sweetalert.css';
import Main from './pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import NeighborMain from './pages/NeighborMain';

const store = configureStore();
const rootElement = document.getElementById('root');

// const hashHistory = createHashHistory({basename:process.env.PUBLIC_URL});

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Component />
      </BrowserRouter>
      {/* </HashRouter> */}
    </Provider>,
    rootElement

  );
};

// NeighborMain ? renderApp(NeighborMain) : renderApp(Main);
// renderApp(Main);
renderApp(NeighborMain)


if (module.hot) {
  module.hot.accept('./pages/Main', () => {
    const NextApp = require('./pages/Main').default
    renderApp(NextApp);
  });
}

registerServiceWorker();

