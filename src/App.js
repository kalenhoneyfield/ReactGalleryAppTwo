/**
 * Basic Structure 
 * App
 *  Header
 *    Home
 *  Header
 *    Search bar
 *    Nav bar
 *      Photo container
 *        List of photos
 *  Header
 *    404
 */

import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import axios from 'axios'

//import small list of nouns
import nouns from './components/wordList/wordList'

//import components
import Header from './components/Header'
import FourOhFour from './components/FourOhFour'
import PhotoContainer from './components/PhotoContainer'
import Home from './components/Home'

//import apiKey
import api_key from './config'

//requirements for the project ask for the key to be in a config file
const APIKEY = process.env.REACT_APP_API_KEY || api_key

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],     //to store the photo array
      searchWord: '', //to store the query
      dynTags: [],    //to setup the dynamic tags
      loading: true   //to determine loading state
    }
  } 

  //when the app first opens generate some nav tags
  componentDidMount() {
    this.generateDynTags() 
  }

  //perform the actual search, default values provided, and the if statement is in place to prevent React from behaving badly
  performSearch = (query = `kittens`, pageNum = 1, perPage = 1) => {
    if(this.state.searchWord !== query){
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${query}&per_page=${perPage}&page=${pageNum}&sort=interestingness-desc&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          searchWord: query,
          loading: true
        })
        this.handleLoading()
        console.log('A Request to the API was just made')
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    }

  }


  /*
  This sets loading to false:
  Doing it this way does 2 things
  1: The user will likely see the loading screen even with fast internet
  2: more importantly this effectively resets the loading state between each search, otherwise the loading screen would only ever appear on the first search
  */
  handleLoading = () => {
    setTimeout( () => {
      this.setState({
        loading: false
      })
    }, 1500)

  }

  //using a noun list, lets get three random words and use them for our tags
  generateDynTags = () => {

    let list = [1,2,3,4]
    list = list.map(word => {
      return nouns[ Math.floor(Math.random() * nouns.length)]
    })

    this.setState(prevState => {
      return {dynTags: list}
    })
  }

  render(){
    return (
      <Router>
        <div className="container">
          <Header dynTags={this.state.dynTags} />
  
          <Switch>
            {/* route for all searches and navlink clicks */}
            {/* using this method simplifies the user experience and handling */}
            <Route path="/search/:tag">
              <PhotoContainer photos={this.state.photos} performSearch={this.performSearch} loading={this.state.loading} />
            </Route>
            {/* Home route */}
            <Route exact path="/">
              <Home performSearch={this.performSearch} photos={this.state.photos}/>
            </Route>
            {/* 404 not found route */}
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}


export default App