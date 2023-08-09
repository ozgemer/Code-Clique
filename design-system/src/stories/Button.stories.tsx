import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../components/Button/Button';

const meta: Meta = {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template: Story<Props> = (args) => <Button {...args} />;

const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button!',
};

const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  children: 'Disabled Button!',
  disabled: true,
};

export default meta;
export { Primary, Disabled };
