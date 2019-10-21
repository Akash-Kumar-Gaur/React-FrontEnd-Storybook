import React from 'react';

import { BottomSheet, BottomSheetWrapper } from 'Platform/Web-Platform/Bottom-Sheet';
import { Modal, ModalWrapper } from 'Platform/Web-Platform/Modal';
import { Checkbox } from 'Platform/Web-Platform/Checkbox';
import { GetItem, SetItem } from 'Platform/Common-Platform/Storage-Utility';
import { Tabs } from 'antd';

// import { Datepicker } from 'Platform/Web-Platform/Date-Time';

// import { isMobile, SelectFromOptions, IsUndefinedOrNull, IsUndefined, ArrayToObject, CopyToClipBoard, TrimQueryString, BuildUrlForGetCall } from 'Platform/Common-Platform/Common-JS-Utility';


export default class extends React.Component {
    state = {
        checkboxVal: true
    }

    componentDidMount() {
        SetItem('test1', 'test22233');
        setTimeout(() => console.log(GetItem('test1')), 2000);
        // console.log('isMobile', isMobile());
    }

    openBottomSheet() {
        BottomSheet.open({ heading: 'Bottomsheet header', component: this.renderDemoComponent });
    }

    openModal() {
        Modal.open({ heading: 'Modal header', component: this.renderDemoComponent });
    }

    renderDemoComponent() {
        return (
            <div
                onClick={() => Modal.close()}
                style={{ padding: '15px' }}
            >
                Hi from demo component
            </div>
        )
    }


    render() {
        const { checkboxVal } = this.state;
        return (
            <div
            // style={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            >
                {/* <h1>Hey</h1> */}
                <button onClick={() => this.openBottomSheet()}>
                    OpenBottomSheet
                </button>

                <button onClick={() => this.openModal()}>
                    open Modal
                </button>
                {/* <h4>{'checkbox ' + checkboxVal} </h4> */}

                {/* <Datepicker
                    key={0}
                    step={30}
                    // value={new Date()}
                    // minTime={new Date()}
                    value={new Date()}
                    // minTime={minPickupTime}
                    // maxTime={maxPickupTime}
                    selectionType="pickup"
                    callback={(time) => this.updateTime(time, 'pickup')}
                /> */}

                <div style={{ marginTop: 20 }}>
                    <Checkbox label={`Checkbox --> ${checkboxVal}`} value={checkboxVal} onChange={() => this.setState({ checkboxVal: !checkboxVal })} />
                </div>

                <BottomSheetWrapper ref={(elem) => BottomSheet.registerBottomsheet(elem)} />
                <ModalWrapper ref={(elem) => Modal.registerModal(elem)} />
            </div >
        )
    }
}