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
        Cypress.Cookies.defaults({
        whitelist: "cartId"
      })
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
    })

    it('Presionamos el botón de continuar', function(){
        cy.get('#cart-buy-btn').click()
    })

    it('Ingresamos el barrio, ciudad o localidad y lo seleccionaos', function(){
        cy.wait(3000)
        cy.get('#c1ty').type('Villa del Parque, Buenos Aires, Ciudad de Buenos Aires')
        cy.get('.gb-suggestion').click()
    })

    it('Seleccionamos opción de retiro en sucursal', function(){
        cy.get('.gb-checkout-delivery-popup-success').click()
    })

    it('Seleccionamos la primera opción de retiro', function(){
        cy.get('.sucursal-ul-list').first().click()
    })

    it('Presionamos el botón continuar', function(){
        cy.get('#continue-pickup').click()
    })

    it('Selecciona el pago con tarjeta de débito visa y presionamos continuar', function(){
        cy.get('#gb-tarjeta-visa-debito').click()
        cy.get('#continue').click()
    })

    it('Llenamos los datos del titular del medio de pago', function(){
        cy.get('#firstName').type('Jonathan')
        cy.get('#lastName').type('Rojas')
        cy.get('#id_value').type('95562097')
        cy.get('#day_select').select('31')
        cy.get('#month_select').select('01')
        cy.get('#year_select').select('1990')
        cy.get('.item-genero').first().click()
        cy.get('#codphone').type('11')
        cy.get('#phone').type('69068083')
        cy.get('#email').type('jonathanrojas31@gmail.com')
        cy.get('#street_name').type('Cuenca')
        cy.get('#street_number').type('3446')
        cy.get('#floor').type('2')
        cy.get('#room').type('D')
        cy.get('#zip_code').type('1417')
        cy.get('.acepto-terminos').click()
    })

    it('Presionar boton de continuar', function(){
        cy.get('#continue').click()
    })
})
