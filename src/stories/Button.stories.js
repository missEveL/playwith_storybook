import React from 'react';

import PdsButton from '../components/pds-button';

export default {
  title: "PDS / Button",
  component: PdsButton,
  argTypes: {
    label: {
      control: {
        type: "text",
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    usethemeprovider: {
      table:{
        disable:true
      }
    },
    onClick: {
      table:{
        disable:true
      }
    }
  },
};

const Template = (args) => <PdsButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
  color: 'primary',
  variant: 'contained'
};
