import React from 'react'

const PhotoModal = (props) => {

    return(
        <div className="modal hidden" id={props.id} >
            <span className="close" >&times;</span>
            <img className="modal-content" src={props.url} alt={props.title}/>
            <div id="caption">{props.title}</div>
        </div>

    )
}

export default PhotoModal