import { Button } from '../components/Button'
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	loading: false,
	size: 'base',
	disabled: false,
	label: "I'M A BUTTON!!!",
}

export const Secondary = Template.bind({})
Secondary.args = {
	primary: false,
	label: "I'M A BUTTON!!!",
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	loading: false,
	disabled: false,
	label: "I'M A BUTTON!!!",
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	loading: false,
	disabled: false,
	label: "I'M A BUTTON!!!",
}
export const Loading = Template.bind({})
Loading.args = {
	primary: true,
	size: 'base',
	loading: true,
	disabled: false,
	label: "I'M A BUTTON!!!",
}
export const Disabled = Template.bind({})
Disabled.args = {
	primary: true,
	size: 'base',
	loading: false,
	disabled: true,
	label: "I'M A BUTTON!!!",
}
export const Clicker = Template.bind({})
Clicker.args = {
	...Primary.args,
	onClick: () => alert('Clicked!'),
}
