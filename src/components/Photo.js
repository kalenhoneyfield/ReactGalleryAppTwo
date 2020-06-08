import React from 'react'

import PhotoModal from './PhotoModal'

const Photo = (props) => {
    //on click open a modal of the image itself, and the prevent the body from scrolling.
    //resume scrolling when you've closed the modal
    return(
        <li onClick={(e) => {
            let modal = document.getElementById(props.id)
            modal.classList.remove('hidden')
            document.body.style.overflowY = 'hidden'
            if(e.target.classList.contains('close')){
                modal.classList.add('hidden')
                document.body.style.overflowY = ''
            }
        }} >
            <img 
                className="zoomImg"
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