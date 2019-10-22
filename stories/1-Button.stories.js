/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import { AwesomeButton } from '../src/Platform/Web-Platform/Awesome-Button/awesomeButton.component';

storiesOf('Form-Components/AwesomeButton', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('First', () => (
    <AwesomeButton
      size={select('size', [null, 'small', 'medium', 'large'], 'medium')}
      type={select('type', ['primary', 'secondary', 'link', 'facebook'], 'primary')}
      disabled={boolean('disabled', false)}
      ripple={boolean('ripple', false)}
      // action={action('clicked')}
      caption={text('text', 'Go to Second')}
      action={linkTo('Form-Components/AwesomeButton', 'Second')}
    >
      {text('text', 'Go to "Second"')}
    </AwesomeButton>
  ), { viewport: { defaultViewport: 'reset' } })
    // <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  .add('Second', () => (
    // <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
    <AwesomeButton
      size={select('size', [null, 'small', 'medium', 'large'], 'medium')}
      type={select('type', ['primary', 'secondary', 'link', 'facebook'], 'secondary')}
      disabled={boolean('disabled', false)}
      ripple={boolean('ripple', false)}
      // action={action('clicked')}
      caption={text('text', 'Go to First')}
      action={linkTo('Form-Components/AwesomeButton', 'First')}
    >
      {text('text', 'Primary')}
    </AwesomeButton>
  ))
  // .add('Primary', () => (
  //   <AwesomeButton
  //     size={select('size', [null, 'small', 'medium', 'large'], 'medium')}
  //     type={select('type', ['primary', 'secondary', 'link', 'facebook'], 'primary')}
  //     disabled={boolean('disabled', false)}
  //     ripple={boolean('ripple', false)}
  //     action={action('clicked')}
  //     caption={text('text', 'Primary')}
  //   >
  //     {text('text', 'Primary')}
  //   </AwesomeButton>
  // ), { viewport: { defaultViewport: 'reset' } });
;
