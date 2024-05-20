import React from 'react'
import MainContent from './MainContent';
import './Header.css'
import Sidenav from './Sidenav';



export default function HeaderComp() {
  return (
    <>
    
    
    <div className='wrapper'>
        <aside  >
            <div id='sidebar' className='d-flex flex-column flex-shrink-0 offcanvas-md offcanvas-start'>
               <Sidenav/>
            </div>
        </aside>
        <MainContent/>
       
        
      
    </div>
    
  
    
    </>
    
  )
}
