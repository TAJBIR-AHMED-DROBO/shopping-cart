import React from 'react'

function Rename({rating,setRating}) {
  return (
    <div className='rating'>
     Rating: {
     
     [...Array(5)].map((e,i)=>{
        return (
            <span key={i} onClick={()=>{setRating({type:"FILTER_BY_RATING",payload:i+1})}} style={{cursor:"pointer"}}>
                {
                    rating > i ? (<i className='fa-solid fa-star'></i>):(<i className='fa-regular fa-star'></i>)
                }
            </span>
        )
     })
     
     }
    </div>
  )
}

export default Rename
