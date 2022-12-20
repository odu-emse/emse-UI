import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/SocialCard.stories'
import terminalLog from '../support/component'

const { Primary, Secondary } = composeStories(stories)

describe('SocialCard.tsx', function () {
	const timestamp = 1387503354
	const content = "This is a cypress test"
	const likes = 31
	const comments = 42
	const office = "ESB 1717"
	const role = "Prof"
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
		cy.mount(<Primary user={TA} />)
		cy.get('div').get('span.role').should('have.class', 'text-slate-500')
		cy.get('div').get('span.role').should('have.css', 'color', 'rgb(100, 116, 139)')
		cy.get('div').get('span.role').should('have.text', 'TA')
	})
    it('should render component user-fullName in dark color with correct content', () => {
		cy.mount(<Primary user={TA} />)
		cy.get('div.fullname').should('have.class', 'mb-1 text-lg font-bold text-slate-700')
		cy.get('div.fullname').should('have.css', 'margin-bottom', '4px')
		cy.get('div.fullname').should('have.css', 'font-size', '18px')
		cy.get('div.fullname').should('have.css', 'line-height', '28px')
		cy.get('div.fullname').should('have.css', 'font-weight', '700')
		cy.get('div.fullname').should('contain.text', 'testFirst testLast')
	})
	it('should render component timestamp with department name and their office', () => {
		TA.office=office
		cy.mount(<Secondary user={TA} timestamp={timestamp}  content={content} />)
		cy.get('div.department').should('have.class', 'text-xs text-neutral-500')
		cy.get('div.department').should('have.css', 'font-size','12px')
		cy.get('div.department').should('have.css', 'line-height','16px')
		cy.get('div.department').should('have.css', 'color','rgb(115, 115, 115)')
		cy.get('div.department').should('contain.text', 'ESB 1717')
		/**
		 * from now and counting the unix Timestamp to years, 1387503354 which was Dec 19 2013, 
		 *   9 years from now, test result will be greater than 9 years 
		 */
		cy.get('div.department')
			.invoke('text')
			.then(parseInt)
			.should('be.a', 'number')
			.and('be.at.least', 9)
	})
	it('should render component role-symbol with correct padding and color', () => {
		TA.role = role
		cy.mount(<Secondary user={TA}/>)
		expect(cy.get('div.role-symbol')).to.exist
		cy.get('div.role-symbol').should('have.descendants', 'svg')
		cy.get('div.role-symbol svg').should('have.class', 'text-yellow-400')
		cy.get('div.role-symbol svg').should('have.css', 'color', 'rgb(227, 160, 8)')
		cy.get('div.role-symbol svg').should('have.attr', 'height', '38')
		cy.get('div.role-symbol svg').should('have.attr', 'width', '38')
	})
	it('should render component content with its input text in medium-dark gray and small font', () => {
		cy.mount(<Primary content={content}/>)
		cy.get('div.break-words').should('have.text', 'This is a cypress test')
		cy.get('div.break-words').should('have.class', 'text-sm text-neutral-600')
		cy.get('div.break-words').should('have.css', 'font-size', '14px')
		cy.get('div.break-words').should('have.css', 'line-height', '20px')
		cy.get('div.break-words').should('have.css', 'color', 'rgb(82, 82, 82)')
	})
	it('should render components for both likes and comments with according properties', () => {
		cy.mount(<Secondary likes={likes} comments={comments}/>)
		expect(cy.get('div.likes')).to.exist
		cy.get('div.likes').invoke('text')
						   	.then(parseInt)
						   	.should('be.a', 'number')
							.should('eq',31)
		cy.get('div.likes').should('have.class', 'flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600')
		cy.get('div.likes').should('have.css', 'display', 'flex')
		cy.get('div.likes').should('have.css', 'color', 'rgb(28, 100, 242)')
		cy.get('div.likes').should('have.css', 'align-items', 'center')
		cy.get('div.likes').should('have.css', 'cursor', 'pointer')
		cy.get('div.likes').should('have.descendants', 'svg')
		cy.get('div.likes svg').should('have.attr', 'height', '20')
		cy.get('div.likes svg').should('have.attr', 'width', '20')
		expect(cy.get('div.comments')).to.exist
		cy.get('div.comments').invoke('text')
						   	.then(parseInt)
						   	.should('be.a', 'number')
							.should('eq',42)
		cy.get('div.comments').should('have.class', 'flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600')
		cy.get('div.comments').should('have.css', 'display', 'flex')
		cy.get('div.comments').should('have.css', 'color', 'rgb(28, 100, 242)')
		cy.get('div.comments').should('have.css', 'align-items', 'center')
		cy.get('div.comments').should('have.css', 'cursor', 'pointer')
		cy.get('div.comments').should('have.descendants', 'svg')
		cy.get('div.comments svg').should('have.attr', 'height', '20')
		cy.get('div.comments svg').should('have.attr', 'width', '20')
	})
	it('should render components for input text and its ability to hold text', () => {
		cy.mount(<Primary likes={likes} comments={comments}/>)

	})
	it('should render components for attach file and emoji', () => {
		cy.mount(<Primary likes={likes} comments={comments}/>)
	})
})