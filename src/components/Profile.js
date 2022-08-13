import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css'
import { Switch, BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'  

const Profile = () => {

    const { user,isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <>
        <h1> LOGIN SUCCESSFUL</h1>
        <div class="home">
            <div className='card'>
                <img src={user.picture} alt={user.name} /> 
                <h2> Hello {user.given_name} {user.family_name} </h2>
                <p>{user.email}</p>
            </div>
            <div className="two">
                <div className="one">
                " The nature of being an entrepreneur means that you fully embrace ambiguity and are 
                comfortable with being challenged regularly. Especially when having to go out for startup fundraising. 
                Choosing this career path is completely irrational because the odds of succeeding are dismal, 
                but most succeed because of their unwavering belief, laser focus on delivering and persistence "
                </div>
                <div className="images">
                    <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img src="https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <Link to="/home" exact> 
                    <button> START YOUR entrepreneur JOURNEY </button>
                </Link>  
            </div>
        </div>
        </>
    
  )
  )
}

export default Profile