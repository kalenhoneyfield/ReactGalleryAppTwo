import React from 'react'

import nouns from './wordList/wordList'
let word = nouns[ Math.floor(Math.random() * nouns.length)]

const Home = (props) => {
    
    props.performSearch(word, 1, 1)
    return (
        <div className="HomePhoto">
            {
                props.photos.map((foto, idx) => {
                            return(
                                    <img 
                                    src={`https://live.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}_c.jpg`} 
                                    alt={foto.title} 
                                    title={foto.title}
                                    key={idx}
                                    />
                                    )
                })
            }



        </div>
    )
}

export default Home