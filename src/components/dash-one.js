import React from 'react'
import "../styles/dash-one.css";

function Dashboard() {
  return (
    
    <div className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
            <nav>
          <ul>
            <li><a href="/projects">Signup</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
        </div>
        <div className="content-section">
         <h1>Good afternoon, Acme Inc. </h1>
         <p>Here is what's happening with your projects today:</p>
        </div>


        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DATA</h3>
                    
                </div>
                <h1>3000</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    
                </div>
                <h1>20</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    
                </div>
                <h1>20</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    
                </div>
                <h1>20</h1>
            </div>
        </div>
        <div className="columns">
            <div className="column">
              <div className="column-content">
              <h2>Acme Plus</h2>
              <p>SALES</p>
              </div>
            </div>
            <div className="column">
              <div className="column-content">
              <h2>Acme Advanced</h2>
              <p>SALES</p>
              </div>
            </div>
            <div className="column">
              <div className="column-content">
              <h2>Acme Professional</h2>
              <p>SALES</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard