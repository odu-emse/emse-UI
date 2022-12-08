import * as React from 'react'
import { Link } from '../components/Link'
import type { LinkProps } from '../components/Link'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Atoms/Link',
	component: Link,
	argTypes: {
		
	},
}
const Template: ComponentStory<typeof Link> = (args) => (
	<Link {...args} />
)

export const Primary: ComponentStory<typeof Link> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	className: '',
	active: true,
	label: 'link',
	icon: null,
	extended: true,
    role: 'menuitem'
}

