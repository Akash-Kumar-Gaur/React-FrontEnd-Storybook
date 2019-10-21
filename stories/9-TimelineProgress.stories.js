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
import TimelineProgress from '../src/Platform/Web-Platform/Timeline-Progress/timelineProgress.component';

const options = {
    text: 'text',
    media: 'media',
    textRow: 'textRow',
    textRow: 'textRow',
    // round: 'round',
};

storiesOf('Resuable-Components/TimelineProgress', module)
    // .addDecorator(centered)
    .addParameters({
        backgrounds: [
            { name: 'Twitter', value: '#00aced' },
            { name: 'Facebook', value: '#3b5998' },
        ],
    })
    .addDecorator(withKnobs)
    .add('TimelineProgress', () => (
        <TimelineProgress sortProcess={boolean('sortProcess', false)} processes={[{
            name: 'KYC Verification',
            completed: 1,
            message: 'Completed'
        }, {
            name: 'Bank Verification',
            completed: 0,
            message: 'Pending'
        }]} />
    ), { viewport: { defaultViewport: 'reset' } });
;