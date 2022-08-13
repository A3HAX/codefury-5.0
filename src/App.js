import './App.css';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import React, { useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

export default function App()  {

  const { isLoading } = useAuth0();

  if(isLoading) return <div className='App'> .........Loading</div>
  return (
    <>
    <div className="App">
      <div className="login">
        <LoginButton />
      </div>
      <div className="logout">
        <LogoutButton /> 
      </div>
    </div>
    <div className="profile">
      <Profile />
    </div>
  </>
  );
}