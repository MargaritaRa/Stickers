import React, {useState} from 'react'

export default function FavFunction({item}){

    const [emoji, setEmoji] = useState('🩶')
    const toggleEmoji=()=>{
        setEmoji(emoji == '💜'? '🩶':'💜')
    }

    const [favs, setFavs] = useState([])
    const toggleFav = (items)=>{
        if(favs.includes(item)){
            setFavs(favs.filter(fav=>fav!== item))
        } else {
            setFavs([...favs, item])
        }
        

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