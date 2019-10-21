/* eslint-disable array-callback-return */
/* eslint-disable no-useless-concat */
/* eslint-disable eqeqeq */
import React, { Component } from 'react';

/* Import react components */
import Select from 'react-select';
import Async from 'react-select/async';

/* Import Utils */
import { Get, IsObjectHaveKeys } from 'common-js-util';
import { SetItem, GetItem } from 'storage-utility';
import { ExtractUrlFromSourceColumnDefinition } from '../../Common-Platform/Utils/location.utils';

/* Import Constants */
// import GLOBAL from './../../../Constants/global.constants';

export class SelectBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            ...this.setOptions(props),
            key: this.props.key || 'id',
            selectClass: this.props.selectClass,
            styles: this.props.styles,
            column: this.props.column,
            recent: [],
            suggestions: [], /* This is to store the suggestions */
            counter: 0,
            disabled: this.props.disabled
        };
    }

    fetchSignal = null;

    UNSAFE_componentWillReceiveProps(nextProps) {
        let { counter } = this.state   /* Defining counter */

        this.setState({ ...this.setOptions(nextProps), disabled: nextProps.disabled });
        if (counter < 2) {  /* Recording counter for column names */

            let columnName, suggestions;

            if (nextProps && nextProps.name) {
                columnName = nextProps.name
                suggestions = GetItem(columnName)
                this.setState({ suggestions })
            }
            counter++;  /* Incrementing counter */
            this.setState({ counter })
        }

    }

    setOptions(props) {

        let { field = 'name' } = props;

        let options = [], value = {};

        /* if the most simple array of values is passed  */
        if (Array.isArray(props.options) && typeof props.options[0] != 'object') {

            /* We modify the array objects to a format for the select box to work */
            props.options.forEach(option => {
                options.push(
                    {
                        name: typeof option == 'number' ? option.toString() : option,
                        value: typeof option == 'number' ? option.toString() : option
                    }
                );
            });

            /* and value is being changed to an object of the same format */
            if (props.value) {
                value = typeof props.value == 'object' ? {} : { name: typeof props.value == 'number' ? props.value.toString() : props.value };
            }
        } else {

            /*  if options are being passed as an object, changes it to an array */
            options = props.options && !Array.isArray(props.options) && Object.keys(props.options).length ? Object.values(props.options) : props.options;

            value = props.value || {};
        }

        return {
            options,
            value,
            field,
            key: props.key || 'id'
        }

    }

    handleChange = (value, e) => {
        const { key, recent, column } = this.state; /* Storing column from state */
        const { options } = this.props;
        let checkDuplicate = 0; /* To avoid duolicate show of data in the suggestion list */


        if (e && e.action == 'clear') {
            this.props.onChange(null, this.props.name);
            return;
        }

        /**
         * Handling remove : remove the item from the list
         */
        if (e && e.action == 'remove-value') {
            for (let i in value) {
                if (value[i] == e.removedValue) {
                    value.splice(i, 1);
                }
            }
            this.setState({ value });
            this.props.onChange(value, this.props.name);
            return;
        }
        if (!value) {
            return;
        }
        if (this.props.async) {
            // this.setState({ value: this.props.key ? value[this.state.key] : value });
            this.setState({ value: value[key] });
        } else {
            this.setState({ value });
        }

        if (Array.isArray(options) && typeof options[0] != 'object') {
            value = value['value'];
        }

        if (this.props.onChange) {
            this.props.onChange(value, this.props.name);
            // this.props.onChange(this.props.name, key ? value[key] : value);
        }

        //USING FOREACH @TODO
        // recent.map((data, key) => { /* A loop to check if there is a duplicate entry or not */
        //     if (data.data.id == value.id) {
        //         checkDuplicate = 1;
        //     }
        // })
        recent.forEach(data => {
            if (data.data.id == value.id) {
                checkDuplicate = 1;
            }
        });

        if (recent.length == 0 || checkDuplicate == 0) {    /* If either recent list is empty or entry is not duplicate , enter into the function */
            this.addToRecentHistory(recent, column, value)
        }

    }

    removeSelected = (value) => {
        // this.setState({ value });
    }

    getOptions = async (input, callback) => {

        const { field, key } = this.state;
        const { async, value, column, sourceColumn } = this.props;

        /* Variable maintained for url */
        let url;

        /* For first time match the id with provided value to preselect the field  */
        if (input) {

            /* base url  */
            url = async;

            /* for source column get the url from source column */
            if (sourceColumn) {

                url = ExtractUrlFromSourceColumnDefinition(sourceColumn);

                /*  Match the query  */
                url = url + '?query=' + field + ' LIKE \'%25' + input + '%25\'';
                // Add the query to the input
                // if (url.includes('query')) {
                //     url = url + ' and ' + field + ' LIKE \'%25' + input + '%25\'';
                // }

            } else if (url.includes('query')) {

                url = url + ' and ' + field + ' LIKE \'%25' + input + '%25\'';

            } else {

                /* Added sorting_type in url for calling lookup value  */
                if (column.sorting_type) {
                    url = url + `?query=${column.sorting_type}` + ' and ' + field + ' LIKE \'%25' + input + '%25\'';
                }
                else {
                    url = url + '?query=' + field + ' LIKE \'%25' + input + '%25\'';
                }
            }
        } else {

            if (value) {

                /* if there is a value set */
                url = async + '?query=' + key + '=' + this.props.value;

                if (url.includes('query')) {
                    url = url + ' and ' + field + '=' + input;
                } else {
                    url = url + '?query=' + field + '=' + input;
                }
            }
        }

        /* Fallback to skip api cancellation for typeahead cases */
        try {
            this.fetchSignal && this.fetchSignal.abort();
        } catch (e) { }

        this.fetchSignal = new window.AbortController();

        //@TODO REMOVE hardcoded url with ROUTE_URL
        const result = await Get({ url: url, signal: this.fetchSignal.signal, urlPrefix: 'https://secure.drivezytest.com/' });

        if (result.success) {

            const options = result.response.map((option) => (
                { ...option, ...{ label: option[field], value: option[key] } }
            ));

            callback(options);

            return options;
        }
    };

    AccessNestedObject(obj, path, valueNotFound = undefined) {
        if (!((Array.isArray(path) || (typeof path == 'string')) && obj && typeof obj == 'object')) {
            return valueNotFound;
        }

        if (typeof path == 'string') {
            path = path.split('.');
        }

        return path.reduce((xs, x) => (xs && xs[x] != undefined) ? xs[x] : valueNotFound, obj)
    }

    addToRecentHistory(recent, column, value) {
        if (column && column.reference_model) {
            recent.reverse();
            if (recent.length > 5) {
                recent.pop();
            }
            recent.reverse();
            if (typeof value == 'object') {
                if (recent.length) {
                    recent[recent.length - 1].data != value && recent.push({ id: column.reference_model.id, data: value })
                } else {
                    recent.push({ id: column.reference_model.id, data: value })
                }
            }

            recent.reverse();
            this.setState({ recent })


            SetItem(column.name, recent)
        }
    }

    render() {
        const { styles, async, getOptions, isClearable = true, menuPlacement = 'auto', selectClass, multi = false, hideRecentSearch = false } = this.props;
        const { options, field, key, column, suggestions } = this.state; //Taking elements from state
        let { value, disabled } = this.state;
        let elem;

        let param = {};

        /* Value is being spread to the component so that placeholder worked */
        /* #TODO all the params can be passed like this */
        if (typeof value == 'object' && value != null) {
            if (IsObjectHaveKeys(value)) {
                param.value = value;
            } else {
                param.value = null;
            }
        }

        if (async) {
            elem = <Async
                name="form-field-name"
                {...param}
                isClearable={isClearable}
                noOptionsMessage={() => 'Type to search'}
                loadOptions={this.getOptions}
                onChange={this.handleChange.bind(this)}
                isMulti={multi}
                getOptionLabel={(context, inputValue) => <span>{context[field]}</span>}
                getOptionValue={(context, inputValue) => <span>{context[key]}</span>}
                menuPlacement={menuPlacement}
                isDisabled={disabled}
                styles={styles}
            />
        } else if (getOptions) {
            elem = <Async
                name="form-field-name"
                {...param}
                noOptionsMessage={() => 'Type to search'}
                loadOptions={getOptions}
                isClearable={isClearable}
                onChange={this.handleChange.bind(this)}
                isMulti={multi}
                getOptionLabel={(context, inputValue) => <span>{context[field]}</span>}
                getOptionValue={(context, inputValue) => <span>{context[key]}</span>}
                menuPlacement={menuPlacement}
                isDisabled={disabled}
                styles={styles}
            />
        } else {
            elem = <Select
                name="form-field-name"
                {...param}
                noOptionsMessage={() => 'Type to search'}
                onChange={this.handleChange.bind(this)}
                options={options}
                isMulti={multi}
                isClearable={isClearable}
                getOptionLabel={(context) => {
                    return <span>{context[field]}</span>
                }}
                getOptionValue={(context, inputValue) => {
                    return <span>{this.AccessNestedObject(context, field, '')}</span>
                }}
                filterOption={(...args) => customFilterOption(args[0], args[1], field)}
                menuPlacement={menuPlacement}
                isDisabled={disabled}
                styles={styles}
            />
        }

        return (
            <div className={`select-box ${selectClass}`} >
                {elem}
                {
                    /** hideRecentSearch-> use for hide recent search  */
                    !hideRecentSearch && suggestions && suggestions.length ?
                        <div className="hide-recent-search">
                            <span>Recent : </span>
                            {
                                suggestions.map((value, key) => {
                                    return (
                                        column ?
                                            value.id == column.reference_model.id ?
                                                <span key={key} className="links"
                                                    onClick={(e) =>
                                                        this.handleChange(value.data)
                                                    }>
                                                    {value.data.name} {key == suggestions.length - 1 ?
                                                        <span>.</span> : <span>,</span>}
                                                </span>
                                                : null
                                            : null
                                    )
                                })
                            }
                        </div> : null
                }
            </div>
        );
    }
}

/**
 * Custom Filter for the select as field is taken 
 * 
 * @param {*} option 
 * @param {*} rawInput 
 * @param {*} field 
 */
const customFilterOption = (option, rawInput, field) => {

    const words = rawInput.split(' ');

    return words.reduce(
        (acc, cur) => {
            if (acc) {
                if (option.data[field]) {
                    return option.data[field].toLowerCase().includes(cur.toLowerCase());
                }
            }
        }, true);
};