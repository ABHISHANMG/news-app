import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom'

import './index.css'


const NewsCard = (props) => {
  const {newsCard,newsCardId} = props
  const {media,title,cleanUrl,summary,link,id} = newsCard

  
  const getId = () => {
    newsCardId(id)
  }

  return (
    <li className='li' onClick={getId}>
        <div class="card" Style="width: 10rem;">
            <img src={media} class="img-thumbnail" />
            <div class="card-body">
                <h1 class="card-title-header">{title}</h1>
            </div>
        </div>
    </li>
  )
}


export default NewsCard