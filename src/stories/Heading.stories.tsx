import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { H1, HeadingProps } from './Heading';

export default {
  title: 'Example/H1',
  component: H1,
  argTypes: {},
} as Meta;

const Template: Story<HeadingProps> = args => <H1 {...args} />;

export const h1 = Template.bind({});
h1.args = {
  label: 'Heading',
};
