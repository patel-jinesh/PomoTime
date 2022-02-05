<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';

	const argTypes = {
    variant: {
      control: {
        options: ['primary', 'regular', 'destructive'],
        type: 'select'
      }
    },
    disabled: {
      control: { type: 'boolean' },
    }
  };
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Basic" args={{ variant: 'primary' }} argTypes={argTypes} />
