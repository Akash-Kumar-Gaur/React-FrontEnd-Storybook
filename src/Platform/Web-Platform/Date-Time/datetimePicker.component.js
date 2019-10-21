import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
import './datetimePicker.component.scss';


const $el = document.querySelector('body');

const PopperContainer = ({ children }) => (
    ReactDOM.createPortal(
        children,
        $el,
    )
);

export default class DateTimePickerWeb extends Component {
    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            defaultMaxTime: new Date(moment('2025-01-01 23:30:00')),
            defaultMinTime: new Date(moment('2025-01-01 00:00:00')),
            today: new Date(),
        };

        this.calendarRef = React.createRef();
    }

    handleChange = (date) => {
        if (this.props.onChange) {
            if (date > this.props.minDate) {
                this.props.onChange(date);
            } else if (!this.props.minDate) {
                this.props.onChange(date);
            }
            else {
                this.props.onChange(this.props.minDate);
                this.setState({ value: this.props.minDate });
            }
        }
        this.setState({ value: date })
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({ value: nextProps.value });
        }
    }

    openDatepicker = (key) => {
        let date_elem = document.getElementsByClassName('react-datepicker-wrapper');
        if (date_elem) {
            setTimeout(() => {
                let input_elem = date_elem[key].children[0].children[0];
                input_elem.click();
            }, 10);
        }
    }

    handleDateChangeRaw = (e) => {
        e.preventDefault();
    }

    getDefaultMaxtime = (a) => {
        if (a) {
            let temp = new Date(moment(a));
            temp = moment(temp).format('YYYY-MM-DD');
            return new Date(moment(temp + ' 23:30:00'));
        } else {
            let temp = new Date(moment('2025-01-01 23:30:00'));
            return temp;
        }
    }

    getDefaultMinTime = (a) => {
        if (a) {
            let temp = new Date(moment(a));
            temp = moment(temp).format('YYYY-MM-DD');
            return new Date(moment(temp + ' 00:00:00'))
        } else {
            let temp = new Date(moment('2025-01-01 00:00:00'))
            return temp;
        }
    }

    handleCalenderBlur = () => {
    }


    render() {

        const { value, defaultMaxTime } = this.state;
        const { minDate, maxDate, minTime, maxTime, excludeTimes, timeIntervals, uniqueKey, placeholderText, dateFormat, timeCaption, showTimeSelect = true, disabled = false } = this.props;

        // console.log(this.props);

        return (
            <div className="datepicker-wrapper" key={uniqueKey}>

                <div className="cal-div">
                    <img alt='calender-image' style={{ width: "20px", paddingBottom: '5px' }} src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1568903749_calendar.svg" onClick={() => this.openDatepicker(uniqueKey)} aria-hidden="true" />
                </div>
                <DatePicker
                    customInput={<DatepickerInput />}
                    showPopperArrow={false}
                    popperContainer={PopperContainer}
                    onChangeRaw={this.handleDateChangeRaw}
                    selected={value}
                    onChange={(date) => this.handleChange(date)}
                    minDate={minDate ? minDate : null}
                    maxDate={maxDate ? maxDate : defaultMaxTime}
                    minTime={minTime ? minTime : this.getDefaultMinTime(value)}
                    maxTime={maxTime ? maxTime : this.getDefaultMaxtime(value)}
                    excludeTimes={excludeTimes ? excludeTimes : []}
                    showTimeSelect={showTimeSelect}
                    timeFormat="HH:mm"
                    timeIntervals={timeIntervals || 30}
                    dateFormat={dateFormat || "EEE, MMM dd HH:mm a"}
                    timeCaption={timeCaption || "Time"}
                    calendarClassName={this.props.className}
                    className={this.props.mainClassName}
                    placeholderText={placeholderText ? placeholderText : "YYYY-MM-DD HH:MM"}
                    onBlur={() => this.handleCalenderBlur()}
                    ref={this.calendarRef}
                    disabled={disabled}
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                            <div
                                style={{
                                    // margin: 10,
                                    color: '#1f2d3d',
                                    display: "flex",
                                    justifyContent: "center",
                                    'font-size': '16px',
                                    fontWeight: '500',
                                    alignItems: 'center'

                                }}>

                                <span className={`month-toggler ${prevMonthButtonDisabled ? 'disabled' : 'enabled'}`} style={{
                                    'transform': 'translateX(-30px)',
                                }} onClick={!prevMonthButtonDisabled && decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </span>

                                {moment(date).format('MMMM')}

                                <span className={`month-toggler ${nextMonthButtonDisabled ? 'disabled' : 'enabled'}`} style={{
                                    'transform': 'translateX(30px)',
                                }} onClick={!nextMonthButtonDisabled && increaseMonth} disabled={nextMonthButtonDisabled}>
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </div>
                        )
                    }
                />
            </div>
        );
    }
}

const DatepickerInput = ({ ...props }) => (
    <input type="text" {...props} readOnly />
);