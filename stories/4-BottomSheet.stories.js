// BottomSheetWrapper
/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

import { BottomSheetWrapper } from '../src/Platform/Web-Platform/Bottom-Sheet/bottomsheet.component';
import { BottomSheet } from '../src/Platform/Web-Platform/Bottom-Sheet/bottomsheet.utils';

storiesOf('Resuable-Components/BottomSheet', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('BottomSheet', () => (
        <div>
            <button onClick={() => openBottomSheet()}>
                open
        </button>
            <BottomSheetWrapper ref={(elem) => BottomSheet.registerBottomsheet(elem)} />
        </div>
    ))
    ;

function openBottomSheet() {
    BottomSheet.open({ heading: 'Bottomsheet header', component: renderDemoComponent });
}


function renderDemoComponent() {
    return (
        <div
            // onClick={() => Modal.close()}
            style={{ padding: '15px' }}
        >
            Hi from demo component
        </div>
    )
}