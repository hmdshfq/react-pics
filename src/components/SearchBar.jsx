import React from 'react'
class SearchBar extends React.Component {
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
                            onChange={e => console.log(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
