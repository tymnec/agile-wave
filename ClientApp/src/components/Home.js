import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="container">
                <div className="jumbotron my-5">
                    <h1>Welcome to AgileFlow</h1>
                    <p>Your Agile Project Management Solution</p>
                    <hr className="my-4" />
                    <p className="lead">
                        AgileFlow helps teams manage projects and tasks efficiently using Agile methodologies.
                    </p>
                    <a className="btn btn-primary btn-lg" href="/board" role="button">Get Started</a>
                </div>
                <div className="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Scrum Board for task management</li>
                        <li>User-friendly interface</li>
                        <li>Real-time collaboration</li>
                        <li>Customizable workflows</li>
                    </ul>
                </div>
                <div className="benefits">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved project visibility</li>
                        <li>Increased team productivity</li>
                        <li>Flexible and adaptive planning</li>
                        <li>Enhanced communication and transparency</li>
                    </ul>
                </div>
            </div>
        );
    }
}
