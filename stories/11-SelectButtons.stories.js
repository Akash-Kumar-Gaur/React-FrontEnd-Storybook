/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import SelectButtons from '../src/Platform/Web-Platform/Select-Buttons/selectButtons.component';

storiesOf('Resuable-Components/SelectButtons', module)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Form-Components/SelectButtons', () => (
        <SelectButtons
            itemsCount={number('itemsCount', 2)}
            isMultiSelect={boolean('isMultiSelect', false)}
            selectButtonsOptions={SelectButtonsOptions}
            selectedColor={text('selectedColor', '#41b6ac')}
            containerClassName={text('containerClassName', 'button-container')}
            buttonClassName={text('buttonClassName', 'button-select')}
            itemMinWidth={text('itemMinWidth', '130px')}
            callback={(value) => console.log(value)}
            resetSelection={boolean('resetSelection', false)}
        />
    ), { notes: 'Check Actions tab for console, callback returns selected buttons', viewport: { defaultViewport: 'reset' } });
;

const SelectButtonsOptions = [{
    label: 'Upcoming',
    value: 1201
}, {
    label: 'Active',
    value: 1202
}, {
    label: 'Completed',
    value: 1203
}, {
    label: 'Cancelled',
    value: 1204
}]