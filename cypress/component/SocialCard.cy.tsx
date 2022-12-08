import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/SocialCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary } = composeStories(stories)

describe('SocialCard.tsx', function () {
	const timestamp = 1664376815
	const content = "This is a cypress test"
	const likes = 31
	const comments = 42
	const TA =  {
		firstName : "Avantika",
		lastName : "Mittapally",
		role : "TA",
		image : "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png",
		title : "Chair of Department",
		office : "ESB 2101",
		department : "Engineering Management & Systems Engineering",
		}
    beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary  />)
		expect(cy.get('div')).to.exist
		expect(cy.get('img')).to.exist
		expect(cy.get('span')).to.exist
		expect(cy.get('button')).to.exist
		expect(cy.get('input')).to.exist
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Secondary />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
    it('should render a profile picture with', () => {
        cy.mount(<Primary />)
    })
    it('should render ')
})