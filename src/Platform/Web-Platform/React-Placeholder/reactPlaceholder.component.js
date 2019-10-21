import React, { Component } from 'react';
import ReactPlaceholder from "react-placeholder";

import "react-placeholder/lib/reactPlaceholder.css";

export class ShimmingEffect extends Component {

    render() {
        const { props } = this;
        return (
            <div className='shimming-effect-wrapper'>
                <ReactPlaceholder
                    children={'loading'}
                    color="#eaeef0"
                    ready={false}
                    showLoadingAnimation={true}
                    {...props}
                />
            </div>
        );
    }
}