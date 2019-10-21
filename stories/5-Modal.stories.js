/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ModalWrapper } from '../src/Platform/Web-Platform/Modal/modal.component';
import { Modal } from '../src/Platform/Web-Platform/Modal/modal.utils';

storiesOf('Resuable-Components/Modal', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Modal', () => (
        <div>
            <button onClick={() => openModal()}>
                Open Modal
            </button>
            <ModalWrapper ref={(elem) => Modal.registerModal(elem)} />
        </div>
    ), { viewport: { defaultViewport: 'reset' } })
    ;

function openModal() {
    Modal.open({ heading: 'Modal header', component: renderDemoComponent });
}

function renderDemoComponent() {
    return (
        <div
            onClick={() => Modal.close()}
            style={{ padding: '15px' }}>
            Hi from demo component
        </div>
    )
}