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
		firstName : "testFirst",
		lastName : "testLast",
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
		cy.mount(<Primary  user={TA}/>)
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
    it('should render a profile picture with the following class and css properties', () => {
        cy.mount(<Primary />)
		cy.get('img').should('have.class', 'shadow-lg rounded-full max-w-full h-12 align-middle border-none')
		cy.get('img').should('have.css', 'font-size', '16px')
		cy.get('img').should('have.css', 'vertical-align', 'middle')
		cy.get('img').should('have.css', 'max-width', '100%')
		cy.get('img').should('have.css', 'height', '48px')
		cy.get('img').should('have.css', 'border-radius', '9999px')
		cy.get('img').should('have.css', 'border-style', 'none')
		cy.get('img').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px')
    })
    it('should render component role in light color with correct content', () => {
		cy.mount(<Primary user={TA}/>)
		cy.get('div').get('span.role').should('have.class', 'text-slate-500')
		cy.get('div').get('span.role').should('have.css', 'color', 'rgb(100, 116, 139)')
		cy.get('div').get('span.role').should('have.text', 'TA')
	})
    it('should render component user-fullName in dark color with correct content', () => {
		cy.mount(<Primary user={TA}/>)
		cy.get('div.fullname').should('have.class', 'mb-1 text-lg font-bold text-slate-700')
		cy.get('div.fullname').should('have.css', 'margin-bottom', '4px')
		cy.get('div.fullname').should('have.css', 'font-size', '18px')
		cy.get('div.fullname').should('have.css', 'line-height', '28px')
		cy.get('div.fullname').should('have.css', 'font-weight', '700')
		cy.get('div.fullname').should('contain.text', 'testFirst testLast')
	})
})