import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//import Connexion from './components/Connexion'
import NotFound from './pages/NotFound';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Root = () => (
  <Router>
    <Routes>
      <Route exact path="/CRUD/" element={<App/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
</Router>
);
//<Route exact path="/pseudo/:pseudo" element={<App/>}/>
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

//serviceWorker.unregister();
