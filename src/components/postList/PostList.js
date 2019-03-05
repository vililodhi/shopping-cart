import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { fetchPosts } from '../../actions/post-actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="top-margin">
                <Navbar />
                <h3> Post </h3>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.postReducer,
        users: state.userReducer
    };
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);
