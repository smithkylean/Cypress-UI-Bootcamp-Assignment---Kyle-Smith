import cartPage from '../page/cart.page'
import Auth from '../page/auth.page'


describe('Remove item',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })


    it(`Remove a single product from cart`, () => {
     Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);

    //add item to cart verification
        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

    //remove item from cart verification
         cartPage.removeItem()
        cy.get(`.cart_quantity`, {timeout:20000})
        .should('have.length', 0)
        
    })

    it(`Remove a product from inventory list`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
           cy.get(`#react-burger-menu-btn`).click()
           cy.get(`#logout_sidebar_link`).should(`be.visible`);
   
       //add item to cart verification
           cartPage.checkout()
           cy.get(`.shopping_cart_link`).should('have.length', 1)
           cy.get('[data-test="back-to-products"]').click()
           cy.get('[data-test="remove-sauce-labs-backpack"]').click()
           cy.get('.shopping_cart_link').click()
           .should(`have.length`,0)
    })

})