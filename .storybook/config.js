import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import '@storybook/addon-console';

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            defaultViewport: 'reset'
        },
    },
});

addParameters({
    options: {
        theme: themes.dark,
    },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
