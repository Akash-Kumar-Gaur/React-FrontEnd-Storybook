/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';

import { ShimmingEffect } from '../src/Platform/Web-Platform/React-Placeholder/reactPlaceholder.component';
import { ReactTabs } from '../src/Platform/Web-Platform/React-Tabs/reactTabs.component';


storiesOf('Resuable-Components/ReactTabs', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('ReactTabs', () => (
        <ReactTabs
            tabsArray={infoFields}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;

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
    headerComponent: (field) => <div className='main-tab'>Personal</div>,
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
    headerComponent: (field) => <div className='main-tab'>{field.name}</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={3} />
}, {
    name: 'Address',
    icon: "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558334456_co-driver.svg",
    data: {
        communication_address: '',
        billing_address: ''
    },
    headerComponent: (field) => <div className='main-tab'>{field.name}</div>,
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
    headerComponent: (field) => <div className='main-tab'>{field.name}</div>,
    component: (data) => <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={2} />
}]