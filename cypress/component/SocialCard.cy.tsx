import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/SocialCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary } = composeStories(stories)

describe('SocialCard.tsx', function () {
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