
/***********
 * bottomsheet wrapper component for showing bottom sheet
 ***********/

import React, { Component } from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

import BottomsheetHeader from './Bottom-Sheet-Header/bottomsheetHeader.component';
import './bottomsheet.component.scss';

export class BottomSheetWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            sheets: []
        };
    }

    /**
     * @param  {object} {...data}
     * getting component as a parameter and open the bottom sheet
     */
    open = ({ ...args }) => {
        let { sheets } = this.state;
        args.isClose = args.isClose || false;
        args.fullScreen = args.fullScreen || false;
        args.isOpen = true;
        // sheets = [];
        sheets.push({ ...args });
        this.setState({ sheets });
        // Location.search({bottomsheet: true});
    }

    /**
     * close the bottom sheet 
     */
    close = ({ key }) => {
        let { sheets = [] } = this.state;
        if (typeof key == 'undefined' || typeof key == 'object' || key == null) {
            sheets.pop();
        } else {
            sheets.splice(key, 1);
        }
        this.setState({ sheets });
    }

    /**
     * close the bottom sheet when click on cross symbol
     */
    toggle = (sheet, key) => {
        // let { sheets } = this.state;

        if (sheet.onClose) {
            sheet.onClose();
        }

        this.close({ key: key });
    }

    render() {
        const { sheets } = this.state;

        return (
            <div className="bottom-modal">

                {
                    // sheets.length ? 
                    sheets.map((sheet, key) => {
                        return (
                            <SwipeableBottomSheet
                                // scrollTopAtClose={true}
                                overlay={!sheet.removeOverlay}
                                key={key}
                                open={sheet.isOpen}
                                onChange={() => this.toggle(sheet, key)}
                                fullScreen={sheet.fullScreen}
                                >
                                <BottomsheetHeader heading={sheet.heading} onClose={() => this.toggle(sheet, key)} />
                                {/* {
                                    sheet.isClose ?
                                        <div className="cancel-block" onClick={() => { this.toggle(sheet, key) }}>
                                            <button>
                                            </button>
                                        </div>
                                        : null
                                } */}
                                <div className="component-block">
                                    {sheet.component()}
                                </div>
                            </SwipeableBottomSheet>
                        )
                    })
                    // : null
                }
            </div>
        )
    }
}
