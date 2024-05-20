import React from 'react'
import Sidenav from '../Header/Sidenav'
import Topnav from '../Header/Topnav'

function Layout(props) {
    return (
        <>
            <div>
                <div className='wrapper'>
                    <Sidenav />
                    {/* <MainContent/> */}
                    <div className='main'>
                        <Topnav />

                        <main>
                            {props.children}
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout
