import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global'

addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ));
  

// automatically import all files ending in *.stories.js
configure(
    [
        require.context('../src/stories', false, /Intro\.stories\.mdx/),
        require.context('../src/stories', true, /\.stories\.(js|mdx)$/)
    ], 
    module
);
