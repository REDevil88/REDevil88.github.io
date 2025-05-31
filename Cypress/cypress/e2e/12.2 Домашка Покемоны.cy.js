describe('Покупка аватара', function () {

   it('Покупка нового аватара тренеру', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get('#k_email').type ('USER_LOGIN');
        cy.get('#k_password').type ('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(3000);
        cy.get('.header_card_trainer').click();
        cy.wait(3000);
        cy.get('.k_mobile > :nth-child(5)').click();
        cy.wait(3000);
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type ('2201 3820 0000 0021');
        cy.get(':nth-child(1) > .style_1_base_input').type('12/34');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Nikita Babiev');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(3000);
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(3000);
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.success__image').should('be.visible');
        cy.get('.style_1_base_link_blue').click();
    })

})