import React from 'react'

import logo from './img/logo.svg'
import './/css/Navbar.css'
export default function Navbar() {
    const menu_link=[
        {id:1,title:"Home", url:"https://google.com"},
        {id:2,title:"About", url:"https://google.com"},
        {id:3,title:"Contact", url:"https://google.com"},
    ]

    return (
        <div>

<header className="header">
        <img src={logo} className="App-logo" alt="logo" />


        <p>
         React paragrafi
        </p>
   
   <ul>
       {
           menu_link.map(link=><li key={link.id}><a href={link.url}>{link.title}</a></li>)
       }
   </ul>


      </header>
            
        </div>
    )
}
