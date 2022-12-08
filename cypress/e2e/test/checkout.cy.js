import cartPage from '../page/cart.page'
import Auth from '../page/auth.page'

describe('Checkout Workflow',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it(`Should add a single product to cart`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);

        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

    })
    it(`Should add multiple product to cart`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);


        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get(`.shopping_cart_link`).click()
        cy.get('.shopping_cart_badge').should(`not.have.length`,2)
        cy.get('.shopping_cart_badge').contains(2)

    })


    it(`Should view checkout info`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);


        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get(`.shopping_cart_link`).click()
        cy.get('.shopping_cart_badge').contains(2)
        cy.get(`#checkout`).click()

        //add checkout info
        cy.get(`#first-name`).click()
        .type(`John`)
        cy.get(`#last-name`).click()
        .type(`Brown`)
        cy.get(`#postal-code`).click()
        .type(`KGN`)
        cy.get(`#continue`).click()

    })

    it(`Should add checkout info`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);


        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get(`.shopping_cart_link`).click()
        cy.get('.shopping_cart_badge').contains(2)
        cy.get(`#checkout`).click()

        //add checkout info
        cy.get(`#first-name`).click()
        .type(`John`)
        cy.get(`#last-name`).click()
        .type(`Brown`)
        cy.get(`#postal-code`).click()
        .type(`KGN`)
        cy.get(`#continue`).click()
    })


    it(`Should verify checkout overview`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);


        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get(`.shopping_cart_link`).click()
        cy.get('.shopping_cart_badge').contains(2)
        cy.get(`#checkout`).click()

        //add checkout info
        cy.get(`#first-name`).click()
        .type(`John`)
        cy.get(`#last-name`).click()
        .type(`Brown`)
        cy.get(`#postal-code`).click()
        .type(`KGN`)
        cy.get(`#continue`).click()

        cy.get(`div[class='summary_info'] div:nth-child(1)`).should(`have.text`,"Payment Information:")
        cy.get('.summary_info > :nth-child(2)').should(`have.text`,"SauceCard #31337")

        cy.get('.summary_info > :nth-child(3)').should(`have.text`, "Shipping Information:")
        cy.get('.summary_info > :nth-child(4)').should(`have.text`,"FREE PONY EXPRESS DELIVERY!")

        cy.get('.summary_subtotal_label').contains("$39.98")
        cy.get('.summary_tax_label').contains("$3.20")
        cy.get('.summary_total_label').contains("43.18")

    })


    it(`Should complete checkout`, () => {
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get(`#react-burger-menu-btn`).click()
        cy.get(`#logout_sidebar_link`).should(`be.visible`);


        cartPage.checkout()
        cy.get(`.shopping_cart_link`).should('have.length', 1)

        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get(`.shopping_cart_link`).click()
        cy.get('.shopping_cart_badge').contains(2)
        cy.get(`#checkout`).click()

        //add checkout info
        cy.get(`#first-name`).click()
        .type(`John`)
        cy.get(`#last-name`).click()
        .type(`Brown`)
        cy.get(`#postal-code`).click()
        .type(`KGN`)
        cy.get(`#continue`).click()

        cy.get(`div[class='summary_info'] div:nth-child(1)`).should(`have.text`,"Payment Information:")
        cy.get('.summary_info > :nth-child(2)').should(`have.text`,"SauceCard #31337")

        cy.get('.summary_info > :nth-child(3)').should(`have.text`, "Shipping Information:")
        cy.get('.summary_info > :nth-child(4)').should(`have.text`,"FREE PONY EXPRESS DELIVERY!")

        cy.get('.summary_subtotal_label').contains("$39.98")
        cy.get('.summary_tax_label').contains("$3.20")
        cy.get('.summary_total_label').contains("43.18")

        cy.get(`#finish`).click()
        cy.get('.complete-header').should(`be.visible`)
        cy.get('.complete-text').should(`have.text`, "Your order has been dispatched, and will arrive just as fast as the pony can get there!")

    })

})