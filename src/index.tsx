import './index.css';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import {App} from './components/App';
import {Provider} from 'react-redux'
import {store} from './store';
import './i18next'
import {Preloader} from "./layout/Preloader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader/>}>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
