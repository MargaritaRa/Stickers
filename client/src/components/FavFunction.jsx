import React, {useState} from 'react'

export default function FavFunction(){

    const [favs, setFavs] = useState([])

    const [emoji, setEmoji] = useState('🩶')


    const toggleEmoji=()=>{
        setEmoji(emoji == '💜'? '🩶':'💜')
    }

    const toggleFav = (allStickers)=>{

    }


    const handleClick=()=>{
        toggleEmoji()
        toggleFav()
    }

    
    return(
        <div>
            <button onClick={handleClick}>{emoji}</button>
          
        </div>
    )
}