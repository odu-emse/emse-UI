import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/ChatHistory.stories'
import terminalLog from '../support/component'

const { Primary } = composeStories(stories)

describe('ChatHistory.tsx', function () {
	const messages = [
		{
			name: 'AVantika Elsher',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1664376815,
			newNotification: false,
		},
		{
			name: 'AVantika Solace',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: true,
		},
		{
			name: 'AVantika Levine',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: true,
			timestamp: 1231211842,
			newNotification: false,
		},
		{
			name: 'AVantika Thatcher',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: false,
		},
		{
			name: 'AVantika Raven',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1341465382,
			newNotification: false,
		},
	]
	const consoleLog = 'it works!'
	beforeEach(() => {
		cy.injectAxe()
	})
	// this part is good
	it('should render component', () => {
		cy.mount(<Primary messages={messages} />)
		expect(cy.get('div')).to.exist
		expect(cy.get('button')).to.exist
		expect(cy.get('img')).to.exist
		expect(cy.get('span')).to.exist
	})
	// this part is good
	it('should have no accessibility violations', () => {
		cy.mount(<Primary messages={messages} />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
	it('should render component message with profile picture with rounded edges and respected ', ()=> {
		cy.mount(<Primary messages={messages} />)
		cy.get('img').should('have.css', 'width', '48px')
		cy.get('img').should('have.css', 'height', '48px')
		cy.get('img').should('have.css', 'border-radius', '9999px')
		cy.get('img').should('have.class', 'object-cover h-12 w-12 rounded-full aspect-square')
	})
	it('should render component message with lg text and semibold font', () => {
		cy.mount(<Primary messages={messages} />)
		cy.get('div.text-lg').should('have.css', 'font-size', '18px')
		cy.get('div.text-lg').should('have.css', 'line-height', '28px')
		cy.get('div.text-lg').should('have.class', 'text-lg font-semibold')
	})
	it('should render component message with sm text and gray color', () => {
		cy.mount(<Primary messages={messages} />)
		cy.get('span').should('have.css', 'font-size', '12px')
		cy.get('span').should('have.css', 'line-height', '16px')
		cy.get('span').should('have.css', 'color', 'rgb(107, 114, 128)')
		cy.get('span').should('have.class', 'text-gray-500 text-xs')
	})
	it('should chathistory box should change visual change visual when being selected',() => {
		cy.mount(<Primary messages={messages} />)
		cy.contains('10 years ago').click()
		cy.get('.chat-element').last().should('have.css', 'border-left-width', '4px')
		cy.get('.chat-element').last().should('have.css', 'border-left-color', 'rgb(26, 86, 219)')
		cy.get('.chat-element').first().should('have.css', 'border-left-width', '4px')
		cy.get('.chat-element').first().should('have.css', 'border-left-color', 'rgba(0, 0, 0, 0)')
	})
	it('buttons on chathistory should be responsive when clicked on', () => {
		cy.mount(<Primary />)
		cy.get('button.delete-icon').first().click().focus()
		cy.get('button.archive-icon').first().click().focus()
	})
})
