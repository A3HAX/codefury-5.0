import React from 'react'
import './BodyHome.css'
import { Chatbot } from 'react-chatbot-kit'
import MessageParser from '../../MessageParser';
import ActionProvider from '../../ActionProvider';
import config from '../../config';

const BodyHome = () => {
    return (
        <div className="start">
        <header>
           <nav className="navigation navbar navbar-default navbar-fixed-top">
      </nav>
        </header>
       <body>
          <div className="intro-header">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="intro-message">   
                              <h1 className="animated slideInLeft">One stop Solution for your  <span className="highlight">business </span>.</h1>
                            <h3 className="animated slideInRight">Explore your options.</h3>
                            
                                <ul className="list-inline intro-social-buttons">
                                  <li>
                                       <a href="#"><button className="button animated bounceInUp btn btn-info btn-lg"> <span className="network-name">View innovations</span></button></a>
                                  </li>
                                  <div className='chat'>
                                    <Chatbot
                                    config={config}
                                    messageParser={MessageParser}
                                    actionProvider={ActionProvider}
                                    />
                                  </div>
                                  <li>
                                       <a href="#"><button className="button2 animated bounceInUp btn btn-info btn-lg"> <span className="network-name">search Sharks</span></button></a>
                                  </li>
                              </ul>
                           
                            <h4 className="learn animated bounceInUp">About Our Agency</h4>
                       <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>    
                            
                    </div> 
                      </div>
                    <div className="col-lg-4"></div>
                  </div>
      
              </div>
      
          
          </div>
         
       </body>
       </div>
            
        
        );
        }

export default BodyHome