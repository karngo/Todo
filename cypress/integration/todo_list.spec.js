describe('Adding Task', function(){
    it('adds a new task in the list', function(){
        // expect(true).to.equal(true)
        cy.visit('http://localhost:8080')
        // cy.pause()
        let listLength = 0
        cy.get('[type="checkbox"]').then(($value) => {
            listLength = $value.length
        })
        cy.get('button').contains('Add new').click()
        cy.get('[type="text"]').type("this is the task")
        cy.get('textarea').type('this is the description')
        cy.get('button').contains('Save').click()
        cy.get('[type="checkbox"]').its('length').then(($length) => $length === listLength+1)
        .should('eq', true)
    })
})