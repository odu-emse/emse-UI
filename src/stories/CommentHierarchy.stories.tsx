import * as React from 'react'
import { CommentHierarchy } from '../components/CommentHierarchy'
import type { CommentHierarchyProps } from '../components/CommentHierarchy'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Atoms/Comment Hierarchy',
	component: CommentHierarchy,
	argTypes: {},
} as ComponentMeta<typeof CommentHierarchy>
const Template = (args) => <CommentHierarchy {...args} />

export const Primary = Template.bind({})
Primary.args = {
	comments: [
		{
			user: {
				uName: 'joeldesante',
				icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
			},
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',

			sub: [
				{
					user: {
						uName: 'joeldesante',
						icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
					},
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
					sub: [
						{
							user: {
								uName: 'joeldesante',
								icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
							},
							content:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
							sub: [],
						},
					],
				},
				{
					user: {
						uName: 'joeldesante',
						icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
					},
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
					sub: [
						{
							user: {
								uName: 'joeldesante',
								icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
							},
							content:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
							sub: [],
						},
					],
				},
			],
		},
		{
			user: {
				uName: 'joeldesante',
				icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
			},
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',

			sub: [
				{
					user: {
						uName: 'joeldesante',
						icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
					},
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
				},
			],
		},
		{
			user: {
				uName: 'joeldesante',
				icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
			},
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',

			sub: [
				{
					user: {
						uName: 'joeldesante',
						icon: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
					},
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ante sit amet lacus efficitur condimentum. Maecenas eget facilisis tellus. Nunc condimentum imperdiet augue ut condimentum. Integer quis enim leo.',
				},
			],
		},
	],
}
