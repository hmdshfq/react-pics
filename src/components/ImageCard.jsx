import React from 'react'

class ImageList extends React.Component {
    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    src={urls.regular}
                    alt={alt_description}
                />
            </div>
        )
    }
}

export default ImageCard