import * as React from 'react'
import { ModuleCard } from '../components/ModuleCard'
import type { ModuleProps } from '../components/ModuleCard'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Atoms/ModuleCard', //providing path
	component: ModuleCard,
} as ComponentMeta<typeof ModuleCard>

const Template: ComponentStory<typeof ModuleCard> = (args: ModuleProps) => (
	<ModuleCard {...args} />
)

export const Primary: ComponentStory<typeof ModuleCard> = Template.bind({})
Primary.storyName = 'first module card'
Primary.args = {
	completion: false,
	module: {
		courseName: 'ENMA',
		courseNumber: 601,
		moduleIdentifiers: 'M 178P',
		moduleName: 'Ethnics and Philosophy in Engineering Applications',
		percentage: 50,
		duration: 38,
		currentTopic: 'Ethical Behavior and leadership',
		returnIdPage: '178P',
		treeView: '178P/treeview',
	},
}

export const Secondary: ComponentStory<typeof ModuleCard> = Template.bind({})
Secondary.storyName = 'second module card'
Secondary.args = {
	completion: false,
	module: {
		courseName: 'ENMA',
		courseNumber: 604,
		moduleIdentifiers: '209V',
		moduleName: 'Simulation Modeling in Transportation Networks',
		percentage: 25,
		duration: 10,
		currentTopic: 'Macroscopic Traffic Simulation',
		returnIdPage: '209V',
		treeView: '209V/treeview',
	},
}

export const Tertiary: ComponentStory<typeof ModuleCard> = Template.bind({})
Tertiary.storyName = 'third module card'
Tertiary.args = {
	completion: true,
	module: {
		courseName: 'ENMA',
		courseNumber: 709,
		moduleIdentifiers: '084K',
		moduleName: 'Risk Analysis',
		percentage: 100,
		averageTime: 13,
		userTime: 11,
		returnIdPage: '084K',
	},
}
