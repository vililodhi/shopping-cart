import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term : '' };

    onFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="ui form">
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
