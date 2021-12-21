import React from 'react'
class SearchBar extends React.Component {
    state = { term: '' }

    render() {
        return (
            <div className='ui segment'>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        this.props.onSubmit(this.state.term)
                    }}
                    className='ui form'
                >
                    <div className='field'>
                        <label htmlFor='search'>Image Search</label>
                        {/* onChange is a special property that listens to user input */}
                        <input
                            id='search'
                            type='text'
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
