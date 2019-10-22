
/**
 * ExpandableTableWrapper wrapper
 * 
 * This accepts following props
 * 
 * listing (for data) <Array>
 * columns (for table) <Array>
 * 
 * This works same as Table Wrapper additionally accepts object that has key 'type' as 'details'
 * field as null
 * and component functions that renders component
 * Example: {
                field: null,
                type: 'details',
                component: () => <ReferAndEarn />
            }
 * 
 * Full Example- <ExpandableTableWrapper listing={field.data}
                columns={[{
                    field: null,
                    label: 'Amount',
                    fieldTemplate: (listing) => {
                        return (
                            <span>
                                <span>{DisplayPrice(Math.abs(listing.amount))}</span><span className={`${listing.amount < 0 ? 'negative' : 'positive'}`}>{listing.amount < 0 ? ' (DR)' : ' (CR)'}</span>
                            </span>
                        )
                    }
                }, {
                    field: null,
                    type: 'details',
                    component: () => <ReferAndEarn />
                }
                ]}
            />
 * 
 * File author  - akash.gaur@drivezy.com
 */

import React, { Component } from 'react';

import { IsObjectHaveKeys, AccessNestedObject } from '../../Common-Platform/Utils/common.utils';

import './expandableTableWrapper.scss';

export default class ExpandableTableWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listing: this.props.listing,
            columns: this.props.columns,
            selectedColumn: {},
            selectedListing: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ listing: nextProps.listing, columns: nextProps.columns });
    }

    /**
     * Return fieldtemplate' value to display in table
     * Evaluates the value for field template 
     * @param {object} column 
     */
    getValue(column) {
        let value;
        try {
            value = eval('entry.' + column.field);
            if (value && typeof value == 'object') {
                value = value.id;
            }

        } catch (e) { }
        return value
    }

    /**
     * entry is Listing row
     * column is object containing which field value to display
     * 
     * To render the data from listing
     * @param {object} entry 
     * @param {object} column 
     */
    renderContent(entry, column) {
        return AccessNestedObject(entry, column.field);
    }

    /**
     * Takes value column(object) and currentListing(object) to select the clicked listing and show the details
     * Uses isSelected value of listing to show/hide details
     */
    showDetails = (column, currentListing) => {
        return (
            <div className='details-switch' onClick={() => this.selectListingAndShowDetails(column, currentListing)}>
                DETAILS <img alt="detail-arrow" className='details-arrow' src={!currentListing.isSelected ? 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566886589_arrow-down-sign-to-navigate.png' : 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566886683_up-arrow.png'} />
            </div>
        )
    }

    /**
     * Takes value column(object) and currentListing(object) and changes isSelected value of listing
     * If same listing is clicked it toggles the details else hide the old one and shows details of new one
     */
    selectListingAndShowDetails = (column, listing) => {
        const { currentListing } = this.state;
        if (currentListing && (currentListing.id !== listing.id)) {
            currentListing.isSelected = false;
            listing.isSelected = true;
        } else {
            listing.isSelected = !listing.isSelected;
        }
        this.setState({ currentListing: listing, selectedColumn: column });
    }

    render() {
        const { listing, columns, selectedColumn } = this.state;
        return (
            <div className='expandableTable-wrapper'>
                {/* Mapping columns to display table headings */}
                <div className='table-header'>
                    {
                        columns && columns.map((column, key) => {
                            return (
                                <div className='head-content' key={key}>
                                    {column.label}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='expandable-row'>
                    <div className='main-row'>
                        {
                            // mapping listings and then columns to display data
                            listing && listing.map((entry, key) => {
                                return (
                                    <div>
                                        <div className='expandable-row' key={key}>
                                            <div className={`listing-row ${entry.isSelected ? 'active' : 'default'}`}>
                                                {columns && columns.map((column, key) => {
                                                    return (
                                                        <div className='row-content' key={key}>
                                                            {
                                                                column.fieldTemplate ?
                                                                    column.fieldTemplate(entry, this.getValue(column)) :
                                                                    (column.type == 'details' ? this.showDetails(column, entry) : this.renderContent(entry, column))
                                                            }
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {/* To show details component */}

                                        </div>
                                        {
                                            entry.isSelected ?
                                                <div className='row-details'>
                                                    {IsObjectHaveKeys(selectedColumn) ? selectedColumn.component(entry) : null}
                                                </div>
                                                : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}