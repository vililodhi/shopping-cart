import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term : '' };

    onSearchSubmit = event => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onSearchSubmit} className="ui form">
                <input
                    type="text"
                    placeholder="Search here.." 
                    onChange={(e) => this.setState({ term: e.target.value })}
                    value={this.state.term}
                />
            </form>
        );
    }
}

export default SearchBar;
