import React from 'react'
import Header from './src/components/Header'
import './src/styles/normalize.scss'
import './src/styles/Layout.scss'

function Layout({pageTitle,children}) {
    return (
        <div>
        <div className='head'> 
        <title>{pageTitle}</title>
        </div>
           <div className='body'>
               <Header/>
               <div className='wrapper'>
                {children}
                </div>
          </div>
        </div>
    )
}

export default Layout
