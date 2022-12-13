import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../../src/stories/UserProfile.stories'
import terminalLog from '../support/component'


const { Primary } = composeStories(stories)

describe('UserProfile.tsx', function () {

    const user= {

                firstname: { control: 'text' },
    lastName: { control: 'text' },

                image: { control: 'text' },

                email: { control: 'text' },

                planOfStudy: [

                    {

                        status: { control: 'text' },

                        term: { control: 'text' },

                    },

                    {

                        status: { control: 'text' },

                        term: { control: 'text' },

                    },

                    {

                        status: { control: 'text' },

                        term: { control: 'text' },

                    },

                ],

            }

        const    isCurrentUser={ control: 'boolean' }
    beforeEach(() => {
        cy.injectAxe()
    })
    it('should render component', () => {
        cy.mount(< Primary />)
        expect(cy.get('div')).to.exist




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
    it('should render component with a image ', () => {
        cy.mount(<Primary />)

        cy.get('span').should('have.class', 'cursor-pointer')
        cy.get('img')





    })
    it('should render component with a sidebar which has Userinfo, Planofstudy and profile tabs ', () => {
        cy.mount(<Primary />)

        cy.get('button')
        cy.get('li').should('have.class', 'py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none')
        cy.get('a[href="#user"]').should('have.class', 'text-base')
        cy.get('li[role="UserInfo-Link"]').should('have.class', 'py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none')
        cy.get('a[href="#modules"]').should('have.class', 'text-base')
        cy.get('li[role="PlanOfStudy-Link"]').should('have.class', 'py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none')

    })
    it('should render component which shows UserInfo details ', () => {
        cy.mount(<Primary />)

        cy.get('form')
        cy.get('div').should('have.class', 'flex md:flex-row md:justify-between flex-col mb-3')
        cy.get('Input[name="firstName"]')
        cy.get('Input[name="lastName"]')
        cy.get('div').should('have.class', 'w-full mb-3')
        cy.get('Input[name="email"]')
        cy.get('Button[label="Update Profile"]')
        cy.get('button').should('have.class','text-white border-red-400 bg-red-500 rounded w-auto px-4 py-2')


    })
    it('should render component which shows PlanOfStudy details ', () => {
        cy.mount(<Primary />)

        cy.get('h3').should('have.class', 'text-2xl bold border-b border-gray-200 mb-3')
        cy.get('table').should('have.class', 'border-separate border-spacing-2 border border-slate-400')
        cy.get('thead')
        cy.get('tr')
        cy.get('th[role="StatusRole"]').should('have.class', 'p-2 border border-slate-300')
        cy.get('th[role="TermRole"]').should('have.class', 'p-2 border border-slate-300')
        cy.get('tbody')
        cy.get('tr')
        cy.get('td[role="userStatus-index-0"]').should('have.class','p-2 border border-slate-300')
        cy.get('td[role="termStatus-index-0"]').should('have.class','p-2 border border-slate-300')
        cy.get('tr')
        cy.get('td[role="userStatus-index-1"]').should('have.class','p-2 border border-slate-300')
        cy.get('td[role="termStatus-index-1"]').should('have.class','p-2 border border-slate-300')
        cy.get('tr')
        cy.get('td[role="userStatus-index-2"]').should('have.class','p-2 border border-slate-300')
        cy.get('td[role="termStatus-index-2"]').should('have.class','p-2 border border-slate-300')



    })

})
