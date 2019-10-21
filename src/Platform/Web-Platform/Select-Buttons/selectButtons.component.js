import React, { Component } from 'react';

import './selectBottons.component.scss';

export default class SelectButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMultiSelect: this.props.isMultiSelect || false,
            selectButtonsOptions: this.props.selectButtonsOptions
        }
    }

    selectButton = (entryButton) => {
        let { isMultiSelect = false, selectedButton = [] } = this.state;
        entryButton.isSelected = !entryButton.isSelected;
        if (isMultiSelect) {
            if (entryButton.isSelected) {
                selectedButton.push(entryButton);

            } else {
                selectedButton = selectedButton.filter((entry) => entry.value != entryButton.value);
            }
        } else {
            if (Array.isArray(selectedButton) && selectedButton.length && selectedButton[0].value != entryButton.value) {
                selectedButton[0].isSelected = false;
            }
            selectedButton = [entryButton];
        }
        this.setState({ entryButton, selectedButton });
        this.props.callback(selectedButton);
    }

    componentDidMount() {
        if (this.props.resetSelection) {
            this.resetSelections(this.props.selectButtonsOptions);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isMultiSelect: nextProps.isMultiSelect, selectButtonsOptions: nextProps.selectButtonsOptions });
        if (nextProps.resetSelection) {
            this.resetSelections(nextProps.selectButtonsOptions);
        }
    }

    resetSelections = (selectButtonsOptions) => {
        selectButtonsOptions.map((entry) => {
            entry.isSelected = false;
        })
        this.setState({ selectButtonsOptions });
    }

    render() {
        const { containerClassName = '', itemsCount = 2, buttonClassName = '', itemMinWidth = '130px', selectedColor = '#41b6ac' } = this.props;
        const { selectButtonsOptions } = this.state;

        return (
            <div className={`select-buttons-container ${containerClassName}`}>
                <div className='select-buttons-wrapper row'>
                    {
                        selectButtonsOptions.map((entryButton, key) => {
                            return (
                                <div className={`select-button ${buttonClassName}`} key={key} style={{ float: 'left', minWidth: itemMinWidth, width: `${(100 / itemsCount)}%` }} onClick={() => this.selectButton(entryButton)}>
                                    <span className={`button-label option-wrapper ${entryButton.isSelected ? 'active-button' : 'inactive'}`} style={{ border: entryButton.isSelected ? `1px solid ${selectedColor}` : '1px solid #b8c1cb', color: entryButton.isSelected ? selectedColor : '#1f2d3d' }}>
                                        {entryButton.label}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        );
    }
}