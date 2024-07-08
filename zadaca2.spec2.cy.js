it('visit site', () => {
    // excercise no.3
    cy.visit('https://symphony.is')
    cy.get('.header--🍔').click()
    cy.contains('Careers').click()
    cy.get('#current-openings > .wrapper').scrollIntoView()
})