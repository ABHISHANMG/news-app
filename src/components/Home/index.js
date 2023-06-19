import React, { Component, useState } from 'react'
import { Header } from '../Header';

import NewsCard from '../NewsCard';

import ReactContext from '../../Context';

import { Audio } from 'react-loader-spinner'

import './index.css'

const constantsApi = {
  loading  :'Loading',
  success : 'Success',
  failure : 'Failure',
}


const Home = () => {

    const [newsId, setNewsId] = useState('')


     const newsCard = (id) => {
          setNewsId(id)
     } 

     
     const getNewsData = ({newsList,result,errorMsg}) => (
           
      <>
      
      </>
     
    )

    const loading = () => (
      <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
    )


    

    
    
 
      return (
      <>
      <Header/>
        <div className='home-container bg-body-tertiary'>
       <ReactContext.Consumer>
        {value=> {
          const {newsList,result,errorMsg,constant} = value
          const filteredNews = newsList.filter(eachItem => eachItem.id === newsId); 

          const switchConstants = ({newsList,result,errorMsg,constant}) => {

            switch (constant) {
              case constantsApi.success:
                    return getNewsData({newsList,result,errorMsg})
              case constantsApi.failure:
                    return null      
              case constantsApi.loading:
                    return loading()
              default:
                return null
            }
          }
          
          return (
            <>
            {result? <ul className='ul'>
          {newsList.map(eachItem=> 
            <NewsCard newsCard={eachItem} key={eachItem.id} newsCardId={newsCard} />)}
        </ul> : <p>{errorMsg}</p>}
            <div class="card mb-3 display-container">
            {filteredNews.map(eachItem => (
              <div key={eachItem.id}>
                <img src={eachItem.media} className="img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{eachItem.title}</h5>
                  <p className="card-text">{eachItem.summary}</p>
                  <p className="card-text">
                  <small className="text-body-secondary">Date: {eachItem.publishedDate}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
            </>
          )
        }}
       </ReactContext.Consumer>
       </div>
       </>
      );
    }
  

export default Home