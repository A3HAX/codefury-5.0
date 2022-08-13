import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, BrowserRouter as Router ,Routes,Route} from 'react-router-dom'  
import './index.css';
import App from './App';
import Homepage from './Homepage';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <Router>
      <div>
        <Routes>
        <Route path="/" element={<App />}></Route>  
        <Route path="/home" element={<Homepage />}></Route>  
        </Routes>
      </div>
      </Router>
    </Auth0Provider>
  
);

