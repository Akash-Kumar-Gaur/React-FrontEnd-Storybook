// ExpandableTableWrapper
/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import ExpandableTableWrapper from '../src/Platform/Web-Platform/Expandable-Table-Wrapper/expandableTableWrapper.component';

const TableData = [{
    amount: "-189.000",
    cashback_flag: 0,
    comments: "PNR 7444099455",
    created_at: "2018-11-28 05:41:51",
    id: 45459,
    source: "BookingPayment",
    validity: null
}, {
    amount: "189.000",
    cashback_flag: 0,
    comments: "PNR 1186148813",
    created_at: "2018-11-26 06:00:20",
    id: 45029,
    source: "PaymentRefund",
    validity: null,
}, {
    amount: "-252.000",
    cashback_flag: 0,
    comments: "PNR 1186148813",
    created_at: "2018-11-24 06:35:51",
    id: 44342,
    source: "BookingPayment",
    validity: null
}]

storiesOf('Generic/ExpandableTableWrapper', module)
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('ExpandableTableWrapper', () => (
        <ExpandableTableWrapper listing={TableData}
            columns={[{
                field: "source",
                label: "Source",
            }, {
                field: "comments",
                label: "Comment"
            }, {
                field: null,
                label: 'Amount',
                fieldTemplate: (listing) => {
                    return (
                        <span>
                            <span>{listing.amount}</span>
                        </span>
                    )
                }
            }, {
                field: null,
                type: 'details',
                component: () => renderDemoComponent()
            }
            ]}
        />
    ), { viewport: { defaultViewport: 'reset' } });
;

function renderDemoComponent() {
    return (
        <div
            // onClick={() => Modal.close()}
            style={{ padding: '10px' }}
        >
            <h1>Details</h1>
            <h3>Content</h3>
        </div>
    )
}