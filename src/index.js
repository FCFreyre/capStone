import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';

import App from './App';
import Landing from './Landing';
import Player from './Player';
import Coach from './Coach';
import PlaysPage from './PlaysPage';
import PlayFormPage from './PlayFormPage';
import FlashCardPage from './FlashCardPage';
import FlashCardFlipper from './FlashCardFlipper';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//     <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
//   )} />
// )

// <ActiveLink activeOnlyWhenExact to="/Player" label="Player" />

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="ui container">
        <Route path="/" component={App} />
        <Route path="/Landing" component={Landing} />
        <Route path="/Player" component={Player} />
        <Route path="/Coach" component={Coach} />
        <Route exact path="/Coach/plays" component={PlaysPage} />

        <Route path="/Coach/plays/new" component={PlayFormPage} />
        <Route path="/Coach/play/:_id" component={PlayFormPage} />
        <Route exact path="/Player/plays" component={FlashCardPage} />
        <Route exact path="/Player/plays/FlashCardPage" component={FlashCardFlipper} />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
