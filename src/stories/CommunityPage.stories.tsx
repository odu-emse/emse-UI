import * as React from 'react'
import { CommunityPage, CommunityPageProps } from '../components/CommunityPage'
import { ComponentStory, ComponentMeta } from '@storybook/react'


export default {
	title: 'Atoms/Community Page', //providing path
	component: CommunityPage,
	argTypes: {},
	//argTypes: {}, giving user the control based on the Prop-types
	// i.g.
	// argTypes: {
	//    size: {control: 'select'}
	// }
} as ComponentMeta<typeof CommunityPage>

const Template: ComponentStory<typeof CommunityPage> = (
	args: CommunityPageProps
) => <CommunityPage {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Community Page'
Primary.args = {

}