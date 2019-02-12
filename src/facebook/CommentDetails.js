import React from 'react';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CurrentPosition from '../position/CurrentPosition';
import Navbar from '../shared/Navbar';

const CommentDetail = (props) => {
    return (
        <div className="row top-margin">
            <Navbar />
            <div className="col-md-6">
                <div className="ui container comments">
                    <ApprovalCard>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a href="/" className="author">{faker.name.firstName()}</a>
                        </div>
                        <div className="metadata">
                            <span className="date">Today at 2:27PM</span>
                        </div>
                        <div className="text">This is fake data!</div>
                    </ApprovalCard>
                    <ApprovalCard>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a href="/" className="author">{faker.name.firstName()}</a>
                        </div>
                        <div className="metadata">
                            <span className="date">Today at 3:37PM</span>
                        </div>
                        <div className="text">This is fake data!</div>
                    </ApprovalCard>
                    <ApprovalCard>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()} />
                        </a>
                        <div className="content">
                            <a href="/" className="author">{faker.name.firstName()}</a>
                        </div>
                        <div className="metadata">
                            <span className="date">Today at 4:47PM</span>
                        </div>
                        <div className="text">This is fake data!</div>
                    </ApprovalCard>
                </div>
            </div>
            <div className="col-md-6">
                <b><CurrentPosition /></b>
            </div>
        </div>
    );
}

export default CommentDetail;
