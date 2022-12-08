/// <reference types="cypress" />
import Auth from '../page/auth.page'

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it('Should sort product list from A-Z', () => { 
        Auth.login(`standard_user`,`secret_sauce`)

        var inventoryList = [`Sauce Labs Backpack`, `Sauce Labs Bike Light`, `Sauce Labs Bolt T-Shirt`, `Sauce Labs Fleece Jacket`, `Sauce Labs Onesie`, `Test.allTheThings() T-Shirt (Red)`]
        inventoryList.sort()

        cy.get(`.inventory_item_name`).each(($elem, index, $list) => {
            expect($elem.text()).equal(inventoryList[index])
        })
    })

    it('Should sort product list from Z-A', () => { 
        Auth.login(`standard_user`,`secret_sauce`)
        cy.get('[data-test="product_sort_container"]').select(`za`)

        var inventoryList = [`Sauce Labs Backpack`, `Sauce Labs Bike Light`, `Sauce Labs Bolt T-Shirt`, `Sauce Labs Fleece Jacket`, `Sauce Labs Onesie`, `Test.allTheThings() T-Shirt (Red)`]
        inventoryList.sort().reverse()

        cy.get(`.inventory_item_name`).each(($elem, index, $list) => {
            expect($elem.text()).equal(inventoryList[index])
        })
    })


})