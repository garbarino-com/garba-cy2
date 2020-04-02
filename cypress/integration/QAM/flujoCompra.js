describe('Hacer una compra en Garbarino', function(){
        //Prevenir los errores propios de la web de Garbarino ej: Uncaught TypeError: Cannot read property 'registration' of undefined
        Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.warn(err);
        if (err.message &&
           err.message.startsWith('Cannot set property \'status\' of undefined')) {
          return false;
        }
        return true;
    });

    it('Ingresar a la web', function(){          
        cy.visit('')
    })

    it('Realizar la búsqueda de "Heladeras"', function(){
        cy.get('#autocomplete-input').type('Heladeras')
        cy.get('.gb-search-button > img').click()
    })

    it('Seleccionar la primera Heladera del listado', function(){
        cy.get('.itemBox').first().click()
    })

    it('Presionamos los botones de comprar y continuar', function(){
        cy.contains('button', 'Comprar').click({force: true})
        cy.wait(5000)
        cy.get('#cart-buy-btn').click()
        //cy.contains('button', 'Continuar').click({force: true})
    })

    it('Ingresamos el barrio, ciudad o localidad y lo seleccionaos', function(){
        cy.wait(3000)
        cy.get('#c1ty').type('Villa del Parque, Buenos Aires, Ciudad de Buenos Aires')
        cy.get('.gb-suggestion').click()

    })
})


