import * as React from 'react'
import { ChatHistory } from '../components/ChatHistory'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import type {ChatHistoryProps} from '../components/ChatHistory'

export default {
	title: 'Molecules/Chat History',
	component: ChatHistory,
	argTypes: {
		messages: {
			control: 'object',
			description: 
				'Assigning the below declared type "HistoryProps" to chat history',
		},
	},
} as ComponentMeta<typeof ChatHistory>

const onHandle = () => {
	console.log('it works!')
}

const Template: ComponentStory<typeof ChatHistory> = (args :ChatHistoryProps) => <ChatHistory {...args} handle={onHandle} />

export const Primary: ComponentStory<typeof ChatHistory> = Template.bind({})
Primary.args = {
	messages: [
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1664376815,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1231211842,
			newNotification: true,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: true,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: true,
			timestamp: 1341465382,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1034500193,
			newNotification: false,
		},
	],
}
