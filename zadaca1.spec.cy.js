it('visit site', () => {
    // excercise no.2 
    cy.visit('https://symphony.is')
    cy.get('.header--🍔').click()

    cy.get('.header--nav')
        .find('.header--nav-item.simpleSubNav')
        .click()
    cy.contains('Company').click()
    cy.get('.pageMetaDetails--list')
        .should('be.visible').and('contain', 'HQ')
        .should('be.visible').and('contain', 'Founded')
        .should('be.visible').and('contain', 'Size')
        .should('be.visible').and('contain', 'Consulting Locations')
        .should('be.visible').and('contain', 'Engineering Hubs')
        .should('be.visible').and('contain', 'Clients')


    cy.url().should('eq', 'https://symphony.is/about-us/company')
})