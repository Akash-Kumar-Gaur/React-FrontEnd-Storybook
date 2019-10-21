/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

storiesOf('Welcome', module)
  .addDecorator(centered)
  .add('Intro', () => (
    <div className='Intro'>
      <h2>Welcome to Drivezy Web and PWA Storybook.</h2>
      <h4 style={{ color: '#828282' }}>
        Find components and their examples to better understand how they work and what props they accept.
      </h4>
    </div>
  ), { viewport: { defaultViewport: 'reset' } });
;
