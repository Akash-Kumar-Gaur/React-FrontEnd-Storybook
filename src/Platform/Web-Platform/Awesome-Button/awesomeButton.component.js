import React, { Component } from 'react'
import { AwesomeButtonProgress } from 'react-awesome-button';

import 'react-awesome-button/dist/styles.css';

export class AwesomeButton extends Component {

    constructor(props) {
        super(props);

        this.submitButton = React.createRef();
    }

    render() {
        const { onClick, caption, disabled, resultLabel, loadingLabel, color } = this.props;
        const { props } = this;
        return (
            <div className='awesome-button-wrapper'>
                <AwesomeButtonProgress
                    ref={(input) => {
                        this.progresButton = input;
                    }}
                    resultLabel={resultLabel ? resultLabel : 'Success'}
                    loadingLabel={loadingLabel ? loadingLabel : 'Wait...'}
                    disabled={disabled}
                    type={color}
                    releaseDelay={100}
                    size="large"
                    action={(element, next) => {
                        onClick(next);
                    }}
                    {...props}
                >
                    {caption || 'Submit'}
                </AwesomeButtonProgress>
            </div>
        );
    }
}