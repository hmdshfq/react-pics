import React from 'react'

const ImageList = props => {
    console.log(props.images)
    const images = props.images.map(image=><img src={image.urls.regular} alt={image.alt_description}></img>)
    return (
        <div>{images}</div> 
    ) 
}

export default ImageList
