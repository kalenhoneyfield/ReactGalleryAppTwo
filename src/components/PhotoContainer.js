import React from 'react'
import {
    useParams
  } from "react-router-dom"

import Photo from './Photo'

import Loading from './Loading'

const PhotoContainer = (props) => {

    let { tag } = useParams(); //lets figure out where we are

    const results = props.photos

    let photos 
    if(results.length > 0){
      photos = results.map(foto =>  (
                 <Photo 
                    // farm0 was occasionally being included in the results, but DNS said it didn't exist. :-/ Setting this to farm66 seems to fix it
                    // working again 6/4
                    // url={`https://farm66.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    // url={`https://farm${foto.farm}.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    // whelp... google found the answer to this problem
                    url={`https://live.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    title={foto.title}
                    key={foto.id} 
                    {...foto}
                  /> 
                 
            )) 
      
    }
    //building a whole other component for this bit seemed overkill
    else{
      photos = ( <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>)
    }
    return(
        
        <div className="photo-container">
            {/* Why does the below props function run over and over again on a single load 11k API hits in less than 15 mins... WTF */}
            {/* Note: bandaid has been applied to the function in the App.js file */}
            {props.performSearch(tag, 1, 24)}
        <h2>Results for: {tag} </h2>

        {/* if loading is still true, show the loading screen, otherwise, show the photos */}
        { props.loading 
            ? <Loading /> 
            : ( <ul>
                {photos}
                </ul>)
        }

      </div>
    )
}

export default PhotoContainer