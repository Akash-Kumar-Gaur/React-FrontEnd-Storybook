import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

import './rangeSlider.component.scss';

export default class RangeSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            defaultValue: this.props.defaultValue
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ defaultValue: nextProps.defaultValue });
    }

    render() {
        const { disabled, isRange = false, isVertical = false, isReverse, tooltipVisible, maxValue, minValue, isDotsSelection, step, containerWidth = '400px', containerHeight = '200px', containerBackground = '#fff' } = this.props;
        const { defaultValue } = this.state;
        return (
            <div className='slider-container' style={{ width: containerWidth, height: containerHeight, backgroundColor: containerBackground }}>
                <Slider
                    tooltipVisible={tooltipVisible}
                    range={isRange}
                    reverse={isReverse}
                    vertical={isVertical}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    dots={isDotsSelection}
                    step={step}
                    max={maxValue}
                    min={minValue}
                    {...this.props}
                />
            </div>
        );
    }
}