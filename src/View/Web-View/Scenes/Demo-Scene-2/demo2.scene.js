import React, { Component } from 'react';

import { ShimmingEffect } from 'Platform/Web-Platform/React-Placeholder';
import { ReactTabs } from 'Platform/Web-Platform/React-Tabs';
import { AwesomeButton } from 'Platform/Web-Platform/Awesome-Button';
import { SelectBox } from 'Platform/Web-Platform/Select-Box';
import DateTimePickerWeb from 'Platform/Web-Platform/Date-Time/datetimePicker.component';
import { Datepicker } from '../../../../Platform/PWA-Platform/Date-Time';
import { GetPickupLimit } from '../../../../Utils/datepicker.utils';
import { Checkbox } from 'Platform/Web-Platform/Checkbox';

export default class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isMulti: false,
            isClearableSelection: false
        }
    }

    onSelectOption = (value) => {
        console.log(value);
    }

    handleClick = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    handleCancel = () => {
        this.setState({ isOpen: false });
    }

    handleSelect = (time) => {
        this.setState({ time, isOpen: false });
    }

    render() {
        const { isMulti, isClearableSelection } = this.state;
        const customStyles = {
            control: (base, state) => ({
                ...base,
                height: '50px',
                'minHeight': '55px',
                'borderRadius': '6px !important',
                'background': '#ffffff',
                'border': '1px solid #bdbdbd70 !important',
                'boxShadow': '0 1px 4px 0 rgba(0,0,0,.21)'
            }),
        };

        const options = [
            { value: 'chocolate', label: 'Chocolate', id: 1 },
            { value: 'strawberry', label: 'Strawberry', id: 2 },
            { value: 'vanilla', label: 'Vanilla', id: 3 }
        ]

        const pickupLimit = GetPickupLimit({ chilloff: 120 });

        return (
            <div style={{ width: '100%', display: 'flex' }}>
                {/* <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={5}/> */}
                <div style={{ flex: 1, flexDirection: 'column', display: 'flex', margin: 15 }}>
                    <div>
                        <span>React Tabs and Placeholder</span>
                        <ReactTabs tabsArray={infoFields} />
                    </div>
                    <br />
                    <div>
                        <span>AwesomeButton</span>
                        <AwesomeButton onClick={(next) => { alert('hi'); next(); }} type={'facebook'} />
                    </div>
                </div>

                <br />
                <br />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 15 }}>
                    <span>SelectBox</span>
                    <SelectBox
                        isClearable={isClearableSelection}
                        onChange={this.onSelectOption}
                        options={options}
                        placeholder="Select venue"
                        field='label'
                        multi={isMulti}
                        className="select-box"
                        styles={customStyles}
                    />

                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <Checkbox label={'Multiple Selection'} onChange={() => this.setState({ isMulti: !isMulti })} />
                        <Checkbox label={'Clearable Selection'} onChange={() => this.setState({ isClearableSelection: !isClearableSelection })} />
                    </div>

                    <br />
                    <br />
                    <span>Web Datepicker</span>
                    <DateTimePickerWeb
                        step={30}
                        value={new Date()}
                        // dateFormat={'yyyy-mm-dd, HH:mm'}
                        caption="Pickup Time"
                        uniqueKey={0}
                        callback={(time) => alert(time)}
                    />

                    <br />
                    <br />
                    <span>PWA Datepicker</span>
                    <br />
                    <button
                        style={{ width: '100px', borderRadius: 5 }}
                        className="select-btn"
                        onClick={this.handleClick}>
                        Open DatePicker
                </button>
                    <Datepicker
                        key={0}
                        // step={30}
                        // value={new Date()}
                        // minTime={new Date()}
                        value={pickupLimit.min}
                        minTime={pickupLimit.min}
                        maxTime={pickupLimit.max}
                        isOpen={this.state.isOpen}
                        selectionType="pickup"
                        confirmText='Done'
                        cancelText='Cancel'
                        onSelect={this.handleSelect}
                        onCancel={this.handleCancel}
                    // callback={(time) => alert(time)}
                    />
                </div>
            </div>
        );
    }
}

const infoFields = [{
    name: 'Personal',
    // icon: "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg",
    data: {
        display_name: '',
        username: '',
        mobile: '',
        alternate_contact_number: '',
        photograph: ''
    },
    headerComponent: (field) => <div className='main-tab'><img className='tab-icon' src={'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg'} alt='' />Personal</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={5} />
}, {
    name: 'KYC',
    icon: "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg",
    data: {
        pan: '',
        pan_image: '',
        aadhaar_number: '',
        aadhaar_image: ''
    },
    headerComponent: (field) => <div className='main-tab'><img className='tab-icon' src={field.icon} alt='' />{field.name}</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={3} />
}, {
    name: 'Address',
    icon: "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg",
    data: {
        communication_address: '',
        billing_address: ''
    },
    // headerComponent: (field) => <div className='main-tab'><img className='tab-icon' src={field.icon} alt=''/>{field.name}</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={4} />
}, {
    name: 'Bank',
    icon: "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg",
    data: {
        account_no: '',
        display_name: '',
        ifsc_code: '',
        cancelled_cheque_image: ''
    },
    headerComponent: (field) => <div className='main-tab'><img className='tab-icon' src={field.icon} alt='' />{field.name}</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={2} />
}]