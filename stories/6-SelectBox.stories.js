/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { SelectBox } from '../src/Platform/Web-Platform/Select-Box/selectBox.component';

const options = [
    { value: 'chocolateValue', label: 'Chocolate', id: 1 },
    { value: 'strawberryValue', label: 'Strawberry', id: 2 },
    { value: 'vanillaValue', label: 'Vanilla', id: 3 }
]

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: '50px',
        width: '300px',
        'minHeight': '55px',
        'borderRadius': '6px !important',
        'background': '#ffffff',
        'border': '1px solid #bdbdbd70 !important',
        'boxShadow': '0 1px 4px 0 rgba(0,0,0,.21)'
    }),
};

storiesOf('Form-Components/SelectBox', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Selectbox', () => (
        <div>
            <SelectBox
                isClearable={boolean('isClearableSelection', false)}
                // onChange={this.onSelectOption}
                options={options}
                placeholder="Select venue"
                field={text('field', 'label')}
                multi={boolean('isMulti', false)}
                async={boolean('async', false)}
                className={text('className', 'select-box')}
                styles={customStyles}
                isSearchable={boolean('isSearchable', false)}
            />
        </div>
    ), { viewport: { defaultViewport: 'reset' } });
;