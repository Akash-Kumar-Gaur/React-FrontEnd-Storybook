/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, array, boolean, select, number, text } from '@storybook/addon-knobs';
import RangeSlider from '../src/Platform/Web-Platform/Range-Slider/rangeSlider.component';

storiesOf('Form-Components/Slider', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Slider', () => (
        <div>
            Refer <a href={'https://ant.design/components/slider/'} target='_blank'>Ant Design Slider</a>
            <br />
            <br />
            <br />
            <RangeSlider
                // tooltipVisible={boolean('tooltipVisible', true)}
                disabled={boolean('disabled', false)}
                isRange={boolean('isRange', true)}
                defaultValue={array('defaultValue', [20, 40])}
                isDotsSelection={boolean('isDotsSelection', false)}
                step={number('step', 10)}
                maxValue={number('maxValue', 100)}
                minValue={number('minValue', 0)}
                isVertical={boolean('isVertical', false)}
                isReverse={boolean('reverse', false)}
                containerWidth={text('containerWidth', '400px')}
                containerHeight={text('containerHeight', '200px')}
                containerBackground={text('containerBackground', '#fff')}
            />
        </div>
    ), { viewport: { defaultViewport: 'reset' } })
    .add('SliderWithoutTooltip', () => (
        <div>
            <div>With 'tipFormatter={`{null}`}'</div>
            <br />
            <br />
            <RangeSlider
                disabled={boolean('disabled', false)}
                isRange={boolean('isRange', true)}
                defaultValue={array('defaultValue', [20, 40])}
                tipFormatter={null}
            />
        </div>
    ), { viewport: { defaultViewport: 'reset' } });
;