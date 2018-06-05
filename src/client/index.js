import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Fetch } from 'react-request';

class HelloWorld extends Component {
    render() {
        return (
            <Fetch
                url="http://localhost:3000/"
                responseType="text"
                transformData={helloWorld => {
                    return {
                        helloWorld,
                    };
                }}
            >
                {({ fetching, failed, data }) => {
                    if (fetching) {
                        return <div>Loading data...</div>;
                    }

                    if (failed) {
                        return <div>The request did not succeed.</div>;
                    }

                    if (data) {
                        return <div>{data.helloWorld}</div>;
                    }

                    return null;
                }}
            </Fetch>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
