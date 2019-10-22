/**
 * Pagination wrapper
 * 
 * This accepts following props
 * 
 * stats (stats Data) <Object>
 * page (to show page number) <Number>
 * getPreviousRecord (to fetch previous record) <Function>
 * getNextRecord (to fetch next record) <Function>
 * 
 * Full Example- 
 *  stats = {
 *     page: 1
 *     record: 10
 *     total: 158
 * }
 *  <Pagination stats={field.stats} getPreviousRecord={this.getPreviousRecord} getNextRecord={this.getNextRecord} page={page} />
 * 
 * File author  - akash.gaur@drivezy.com
 */

import React, { Component } from 'react';

import './pagination.component.scss';

export default class Pagination extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }

    render() {
        const { stats, page } = this.props;
        return (
            <div className='pagination-wrapper'>
                <div className='pagination-info'>
                    {/* Showing results {stats.offset || 0} - {(((stats.count || stats.total) + (stats.offset || 0)) > (stats.records || stats.total)) ? (stats.records || stats.total) : ((stats.count || stats.total) + (stats.offset || 0))} of {(stats.records || stats.total)} */}
                    Showing results {stats.page > 1 ? stats.record * (stats.page - 1) + 1 : 1}  - {(stats.record * stats.page) < stats.total ? (stats.record * stats.page) : stats.total} of {(stats.records || stats.total)}
                </div>
                <div className='pagination'>
                    <button disabled={page === 1} onClick={() => this.props.getPreviousRecord()} className={`btn ${(page === 1) ? "disabled-nav" : "active"}`}>
                        <img alt="back" src={'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566898485_back.png'} className='back-icon' style={{ zIndex: '999', margin: '0' }} />
                    </button>
                    <span>{page || 1}</span>
                    <button disabled={(stats.record * stats.page) >= stats.total} onClick={() => this.props.getNextRecord()} className={`btn ${((stats.record * stats.page) < stats.total) ? 'active' : 'disabled-nav'}`} >
                        <img alt="back" src={'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566898557_skip-track.png'} className='back-icon' style={{ zIndex: '999', margin: '0' }} />
                    </button>
                </div>
            </div>
        );
    }
}