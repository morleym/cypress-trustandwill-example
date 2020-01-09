context('Getting Started', () => {

    describe('Tell us about you tiles', () => {

        before(() => {
            cy.visit('https://trustandwill.com/get-started/')
        })

        it('includes Kids', () => {
            cy.get('#kids')
        })

        it('includes Healthcare Wishes', () => {
            cy.get('#health')
        })

        it('includes Home', () => {
            cy.get('#home')
        })

        it('includes Assets', () => {
            cy.get('#assets')
        })

        it('includes Married', () => {
            cy.get('#married')
        })

        it('includes Gifts', () => {
            cy.get('#gifts')
        })
    })

    describe('Product recommendations', () => {

        beforeEach(() => {
            cy.visit('https://trustandwill.com/get-started/')
        })

        it('recommends Guardian if only Kids is selected', () => {
            cy.get('#kids')
                .click()
            cy.get('#recommend')
                .click()
            
            // Guardian Product displays "For You" banner
            cy.get('#guardian-product')
                .contains('For You')
                .should('be.visible')

            // Guardian Product details are displayed
            cy.get('#guardian-tab')
                .should('have.attr', 'aria-selected', 'true')
        })
        
        it('recommends Trust for Home- and Business-owners', () => {
            cy.get('#home')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#trust-product')
                .contains('For You')
                .should('be.visible')
            cy.get('#trust-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

        it('recommends Trust for $100k+', () => {
            cy.get('#assets')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#trust-product')
                .contains('For You')
                .should('be.visible')            
            cy.get('#trust-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

        it('otherwise recommends Will for Health', () => {
            cy.get('#health')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#will-product')
                .contains('For You')
                .should('be.visible')            
            cy.get('#will-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

        it('otherwise recommends Will for Married', () => {
            cy.get('#married')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#will-product')
                .contains('For You')
                .should('be.visible')            
            cy.get('#will-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

        it('otherwise recommends Will for Gifts', () => {
            cy.get('#gifts')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#will-product')
                .contains('For You')
                .should('be.visible')            
            cy.get('#will-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

        it('(fails on purpose) recommends Will for 100k', () => {
            cy.get('#assets')
                .click()
            cy.get('#recommend')
                .click()
            
            cy.get('#will-product')
                .contains('For You')
                .should('be.visible')            
            cy.get('#will-tab')
                .should('have.attr', 'aria-selected', 'true')
        })

    })
})