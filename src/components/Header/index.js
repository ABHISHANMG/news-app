import React, { useRef } from 'react'

import {FcNews} from 'react-icons/fc'

import ReactContext from '../../Context'

import './index.css'


export const Header = () => {  

  

     const searchForm = (searchFocus) => ( 

     
        
         <ReactContext.Consumer>
          
          {value=>{
            const {submitForm,inputSearch,searchInput} = value
            
            return (
              <form onSubmit={submitForm}>
                    <input type='text' onChange={inputSearch} value={searchInput} />
                    <button type='submit'>Search</button>
              </form>
            )
          }}
         </ReactContext.Consumer>
        
     )
  
     
        return (
          <nav className="shadow-lg navbar navbar-expand-lg bg-body-tertiary fixed">
        <div className="container-fluid">
          <div className='logo-container'> 
          <FcNews size={60}/>
          <h1 className='logo-name'>Today News!!!</h1>
          </div>
          {searchForm()}
        </div>
      </nav> )

}
