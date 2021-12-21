import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ (term)=> console.log(term) } />
            </div>
        )
    }
}

export default App
