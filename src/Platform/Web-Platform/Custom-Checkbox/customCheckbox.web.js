import React, { Component } from 'react';
import './customCheckbox.scss'

export default class CheckBoxWeb extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }

    render() {
        const { label = '', onChange, key, disabled = false } = this.props;
        const { value } = this.state;
        return (
            <label className={"checkbox-container-web" + (!value ? ' non-check' : '')} key={key}>
                <input type="checkbox" checked={value} onChange={() => onChange ? onChange() : this.setState({ value: !value })} disabled={disabled} />
                <span className={"checkmark " + (value ? 'checked' : '')}></span>
                <span className="text-label">{label}</span>
            </label>
        );
    }
}