import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = props => {
    const images = props.images.map(image => {
        return <image key={image.id} image={image}></image>
    })
    return <div className='image-list'>{images}</div>
}

export default ImageList
