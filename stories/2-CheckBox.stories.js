/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { CheckboxPWA } from '../src/Platform/PWA-Platform/Checkbox/custonCheckbox.pwa';
import CheckBoxWeb from '../src/Platform/Web-Platform/Custom-Checkbox/customCheckbox.web';

storiesOf('Form-Components/CheckBox', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Checkbox PWA', () => (
        <CheckboxPWA
            label={text('label', 'Label')}
            value={boolean('value', false)}
            disabled={boolean('disabled', false)}
            // onChange={(value) => console.log(value)}
        />
    ), { notes: 'Use value toggle to check and uncheck', viewport: { defaultViewport: 'reset' } })
    .add('Checkbox Web', () => (
        <CheckBoxWeb
            label={text('label', 'Label')}
            value={boolean('value', false)}
            disabled={boolean('disabled', false)}
            // onChange={(value) => console.log(value)}
        />
    ), { notes: 'Use value toggle to check and uncheck', viewport: { defaultViewport: 'reset' } });
;