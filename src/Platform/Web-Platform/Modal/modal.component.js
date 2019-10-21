/***********
 * Modal Wrapper Component
 ***********/

import React, { Component } from 'react';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';

import './modal.component.scss';

const Header = ({ heading, onClose }) => (
    <div className="modal-header">
        <div className="modal-heading">
            <h4>
                {heading}
                <i className="fa fa-times" onClick={onClose}></i>
            </h4>
        </div>
    </div>
);


export class ModalWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            modals: [],
        };
    }

    /**
     * @param  {object} {...data}
     * getting component as a parameter and open the bottom sheet
     */
    openModal = ({ ...args }) => {
        let { modals = [] } = this.state;
        args.isOpen = true;
        modals.push({ ...args });

        this.setState({ modals });
    }

    /**
     * close the bottom sheet 
     */
    closeModal = (key) => {
        let { modals = [] } = this.state;
        const modal = modals[key];

        if (typeof modal.onClose == 'function') {
            modal.onClose();
        }

        if (typeof key == 'undefined' || typeof key == 'object' || key == null) {
            modals.pop();
        } else {
            modals.splice(key, 1);
        }


        this.setState({ modals });
    }


    /**
     * @width : "small","medium","large","x-large"
     * @scrollBehavior :"inside","outside"
     * @height : number,string
     */

    render() {
        const { modals } = this.state;
        return (
            <div className="modal-wrapper">
                {
                    modals.map((modal, key) => {
                        const { shouldCloseOnOverlayClick = true, shouldCloseOnEscapePress = true } = modal;
                        return (
                            <ModalTransition key={key}>
                                {
                                    modal.isOpen &&
                                    <ModalDialog
                                        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                                        shouldCloseOnEscapePress={shouldCloseOnEscapePress}
                                        onClose={() => this.closeModal(key)}
                                        // onClose={modal.onClose ? modal.onClose : null}
                                        width={modal.width ? modal.width : 'medium'}
                                    >
                                        <Header heading={modal.heading} onClose={() => { this.closeModal(); modal.onClose && modal.onClose(); }} />
                                        <div className="modal-body">
                                            {modal.component()}
                                        </div>
                                    </ModalDialog>
                                }
                            </ModalTransition>
                        )
                    })
                }
            </div>
        )
    }
}
