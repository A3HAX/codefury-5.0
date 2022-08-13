import React from 'react'
import Navbar from './componentHome/Navbar/Navbar'
import { useAuth0 } from '@auth0/auth0-react';
import BodyHome from './componentHome/BodyHome/BodyHome';

import './Homepage.css';
import 'react-chatbot-kit/build/main.css';

const Homepage = () => {
    const { user,isAuthenticated } = useAuth0();
  return (
    <div>
        <Navbar />
        <BodyHome />
        

    </div>
  )
}

export default Homepage