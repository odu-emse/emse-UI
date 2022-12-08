import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/Link.stories'
import terminalLog from '../support/component'

const { Primary} = composeStories(stories)

describe('Link.tsx', function () {
    const className= ''
	const active= true
	const label= 'link'
	const icon= null
	const extended= true
    const role= 'menuitem'

    
	beforeEach(() => {
		cy.injectAxe()
	})
	it('should render component', () => {
		cy.mount(<Primary />)
		expect(cy.get('a')).to.exist
        expect(cy.get('li')).to.exist
        expect(cy.get('span')).to.exist
      
	})
	it('should have no accessibility violations', () => {
		cy.mount(<Primary />)
		cy.checkA11y(undefined, {
			runOnly: {
				type: 'tag',
				values: ['wcag2a', 'wcag2aa', "section508"],
			}
		}, terminalLog)
	})
    it('should render component with a label mentioned and the attributes active and extended as true', () => {
		cy.mount(<Primary />)
	
		
        cy.get('a')
		cy.get('li').should('have.class', 'block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 justify-start transition-all sm:px-3 sm:py-4 bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4 undefined')
        cy.get('span').should('have.class', 'flex sm:gap-2 gap-0 items-center')
        cy.get('span').should('have.class', 'opacity-50')
        cy.get('span').should('have.class', 'xxs:text-xxs xs:text-xs sm:text-base')

	})
  
	
	
})
