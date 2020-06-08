import React from 'react'

import PhotoModal from './PhotoModal'

const Photo = (props) => {
    
    return(
        <li onClick={(e) => {
            let modal = document.getElementById(props.id)
            modal.classList.remove('hidden')
            if(e.target.classList.contains('close')){
                modal.classList.add('hidden')
            }
        }} >
            <img 
                src={props.url} 
                alt={props.title} 
            />
             <PhotoModal 
                key={props.id} 
                id={props.id} 
                title={props.title} 
                url={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
            />
        </li>

    )
}

export default Photo