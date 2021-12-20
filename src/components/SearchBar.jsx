import React from 'react'
class SearchBar extends React.Component {

    // event object is passed into the function from onChange
    onInputChange(event) {
        event.target.value
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label htmlFor='search'>Image Search</label>
                        {/* onChange is a special property that listens to user input */}
                        <input
                            id='search'
                            type='text'
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
