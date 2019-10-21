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

const options = {
    text: 'text',
    media: 'media',
    textRow: 'textRow',
    textRow: 'textRow',
    // round: 'round',
};

storiesOf('Resuable-Components/Placeholder', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Placeholder', () => (
        <ShimmingEffect
            style={{ width: 300, marginTop: 20 }}
            rows={number('rows', 2)}
            type={select('type', options)}
            color={text('color', '#000')}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;
