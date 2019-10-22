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
import Pagination from '../src/Platform/Web-Platform/Pagination/pagination.component';

const stats = {
    page: 1,
    record: 10,
    total: 158,
}

storiesOf('Generic/Pagination', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Pagination', () => (
        <Pagination
            stats={stats}
            getPreviousRecord={() => alert('prev')}
            getNextRecord={() => alert('next')}
            page={number('page', 1)}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;