/**
 * TimelineProgress wrapper
 * 
 * This accepts following props
 * 
 * processes (Processes Data) <Array>
 * sortProcess (to sort completed process in start) <Boolean> (Default: true)
 * 
 * Ex: let processes = [{
            name: 'KYC Verification',
            completed: loggedUser.vendor.kyc_uploaded,
            message: loggedUser.vendor.kyc_uploaded ? 'Completed' : 'Pending'
        }, {
            name: 'Bank Verification',
            completed: bank_uploaded,
            message: bank_uploaded ? 'Completed' : '6-7 days'
        }]
 * 
 * Full Example- 
 * <TimelineProgress sortProcess={true/false} processes={[{
            name: 'KYC Verification',
            completed: 1,
            message: 'Completed'
        }, {
            name: 'Bank Verification',
            completed: 0,
            message: 'Pending'
        }]} />
 * 
 * File author  - akash.gaur@drivezy.com
 */

import React, { Component } from 'react';

import './timelineProgress.component.scss';

export default class TimelineProgress extends Component {

    compare(a, b) {
        if (a.completed < b.completed) {
            return 1;
        }
        if (a.completed > b.completed) {
            return -1;
        }
        return 0;
    }

    render() {
        const { processes, sortProcess = true } = this.props;

        if(sortProcess){
            processes.sort(this.compare);
        }

        return (
            <div className='timeline-container'>
                <div className='timeline-processes'>
                    {
                        processes && processes.map((process, key) => {
                            return (
                                <div className='process' key={key}>
                                    <div className={`process-status ${process.completed ? 'completed' : 'pending'}`}>
                                        <i className={`fa fa-${process.completed ? 'check' : ''}`} aria-hidden="true"></i>
                                    </div>
                                    <div className='process-name'>
                                        {process.name}
                                    </div>
                                    <div className='process-message light-text'>
                                        ({process.message})
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}