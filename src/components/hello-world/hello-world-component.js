/**
 * @file Example component that renders Hello World.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from '../../utils/noop';
import { getMessage } from './hello-world-actions';
import Navbar from '../../shared/Navbar';

/**
 * Renders HelloWorld Component
 * @return {ReactElement} Hello World HTML
 */
export class HelloWorld extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        message: PropTypes.array
    }

    static defaultProps = {
        dispatch: noop
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMessage());
    }

    render() {
        const { message } = this.props;
        return (
            <div className="row top-margin">
                <Navbar />
                <h1>{ message }</h1>
            </div>
        );
    }
}

export const mapStateToProps = ({ helloWorld: { message } }) => ({ message });

export default connect(mapStateToProps)(HelloWorld);
