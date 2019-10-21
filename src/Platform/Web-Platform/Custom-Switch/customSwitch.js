import React from 'react';

import './switch.component.scss'

export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked || false,
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({ isChecked: nextProps.isChecked });
        }
    }

    render() {
        const { isChecked } = this.state;
        return (
            <label className="switch-toggle-btn">
                <div className='toggle-switch toggle-switch__rounded'>
                    <div className='toggle-switch__wrapper'>
                        <div className={`Slider ${isChecked && 'isChecked'}`} onClick={() => this.props.onChange ? this.props.onChange : this.setState({ isChecked: !isChecked })}></div>
                    </div>
                </div>
            </label>
        );
    }
}