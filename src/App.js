import { Component, createContext, useEffect, useState } from 'react';

import Home from './components/Home';
import ReactContext from './Context';

import FullView from './components/Fullview';

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';

import './App.css';


const constantsApi = {
      loading  :'Loading',
      success : 'Success',
      failure : 'Failure',
}


class App extends Component { 
   
  state = {
    searchInput: '',
    input: 'news',
    newsDetails:[],
    errorMsg:'',
    result: true,
    constant: ''
  };

getNewsDetails = async () => { 
 
  this.setState({constant: constantsApi.loading})
const { searchInput, input } = this.state;
  
const currentDate = new Date();

const year = currentDate.getFullYear();
 const month = String(currentDate.getMonth() + 1).padStart(2, '0');
 const day = String(currentDate.getDate()).padStart(2, '0');

 const formattedDate = `${year}/${month}/${day}`;

 const url = `https://api.newscatcherapi.com/v2/search?q=${input}&from=${formattedDate}&countries=IN&page_size=50`;

 const options = {
   method: 'GET',
   headers: {
     'x-api-key': 'i507UCq-tZFs_9zg0uIGOhJFhYtsFwNynUC2A1GkKzk'
   }
 };

 const response = await fetch(url, options);
 const data = await response.json();
  console.log(data);
 
  if (data.status==='ok') {
  this.setState({constant: constantsApi.success})
    const formatData = data.articles.map((eachNews) => {
 
      return {
              author: eachNews.author,
              cleanUrl: eachNews.clean_url,
              excerpt : eachNews.excerpt,
              isOpinion: eachNews.is_opinion,
              link:eachNews.link,
              media:eachNews.media,
              publishedDate: eachNews.published_date,
              summary:eachNews.summary,
              title:eachNews.title,
             id:eachNews._id,
             twitterAccount:eachNews.twitter_account,
  
       }
     })
     console.log(formatData)
  
  
     this.setState({newsDetails:formatData,result:true})
  } 
  else{
      this.setState({errorMsg:data.status,result:false,constant:constantsApi.failure})
  }

 };

componentDidMount() {
  this.getNewsDetails();
}

userInput = (event) => {
  this.setState({ searchInput: event.target.value });
};

submitInfo = (event) => {
  event.preventDefault();

  const { searchInput } = this.state;

  this.setState({ input: searchInput }, () => {
    this.getNewsDetails();
    this.setState({ searchInput: '' });
  });
};
   

  render() {

    const {newsDetails,errorMsg,result,searchInput,constant} = this.state

  return (
    <div className="App">
    <ReactContext.Provider value={{newsList:newsDetails,errorMsg,result,searchInput,inputSearch:this.userInput,submitForm:this.submitInfo,constant}}>
      <Switch>
        <Home/>
        <FullView/>
      </Switch>
    </ReactContext.Provider>
    </div>
  );
}
}


export default App;


