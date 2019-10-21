/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import DateTimePickerWeb from '../src/Platform/Web-Platform/Date-Time/datetimePicker.component';
import { DatepickerPWA } from '../src/Platform/PWA-Platform/Date-Time/datePicker.component';
import { GetPickupLimit } from '../src/Platform/Common-Platform/Utils/datepicker.utils';

const pickupLimit = GetPickupLimit({ chilloff: 120 });

storiesOf('Form-Components/DatePicker', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .addDecorator(withKnobs)
    .add('DatePicker PWA', () => (
        <DatepickerPWA
            key={0}
            step={number('step', 30)}
            value={pickupLimit.min}
            isOpen={boolean('isOpen', true)}
            minTime={pickupLimit.min}
            maxTime={pickupLimit.max}
            confirmText={text('confirmText', 'Done')}
            cancelText={text('cancelText', 'Cancel')}
            onSelect={(time) => alert(time)}
            // onCancel={() => alert('closed')}
        />
    ), { viewport: { defaultViewport: 'iphonex' } })
    .add('DatePicker Web', () => (
        <DateTimePickerWeb
            timeIntervals={number('timeIntervals', 30)}
            value={new Date()}
            showTimeSelect={boolean('showTimeSelect', true)}
            disabled={boolean('disabled', false)}
            className={text('className', 'my-calender')}
            caption="Pickup Time"
            uniqueKey={0}
            callback={(time) => alert(time)}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;