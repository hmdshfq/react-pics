import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSubmitSearch(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID E2lShl2PqlL09IaAMWwduyIEfENQp8MHHGGz0vbI7wQ',
            }
        })
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmitSearch} />
            </div>
        )
    }
}

export default App
