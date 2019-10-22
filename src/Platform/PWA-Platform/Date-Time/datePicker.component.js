import React, { Component } from 'react';

import moment from 'moment';
import DatePicker from 'react-mobile-datepicker';

import './datePicker.component.scss';


export class DatepickerPWA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            isOpen: props.isOpen,
        }
    }

    handleCancel = () => {
        // console.log('state', this.state);
        this.setState({ isOpen: false });
    }


    componentDidMount = () => {
        // let classUl = document.getElementsByClassName('time-selector');
        // let btnElem = document.getElementsByClassName('datepicker-navbar-btn')[0];
        // classUl[0].addEventListener('touchend', function (e) {
        //     setTimeout(() => {
        //         btnElem.click();
        //     }, 300)
        // })
    }

    render() {
        const { callback, step, key } = this.props;
        const { value } = this.state;

        const dateConfig = {
            'month': {
                format: value => {
                    return moment(value).format('MMM, YY')
                },
                caption: 'Mon',
                step: 1,
            }
            , 'date': {
                format: value => {
                    return moment(value).format('ddd, DD');
                },
                caption: 'Year',
                step: 1,
            },
            'hour': {
                format: 'hh',
                caption: 'Hour',
                step: 1,
            },
            'minute': {
                format: 'mm',
                caption: 'Min',
                step: step || 30,
            },
        };

        return (
            <div className="datepicker-mobile" key={key} >
                <DatePicker
                    showHeader={false}
                    //showCaption={true}
                    isPopup={true}
                    min={new Date(this.props.minTime)}
                    max={this.props.maxTime ? new Date(this.props.maxTime) : new Date('2030-01-01 00:00:00')}
                    dateConfig={dateConfig}
                    // value={new Date(value)}
                    value={this.props.value !== null ? new Date(this.props.value) : new Date(value)}
                    isOpen={false}
                    onSelect={callback}
                    onCancel={this.handleCancel}
                    {...this.props}
                />
            </div>
        )
    }
}