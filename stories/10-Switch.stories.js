// Switch
/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import Switch from '../src/Platform/Web-Platform/Custom-Switch/customSwitch';

const options = {
    text: 'text',
    media: 'media',
    textRow: 'textRow',
    textRow: 'textRow',
    // round: 'round',
};

storiesOf('Form-Components/Switch', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Switch', () => (
        <Switch
            isChecked={boolean('isChecked', false)}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;