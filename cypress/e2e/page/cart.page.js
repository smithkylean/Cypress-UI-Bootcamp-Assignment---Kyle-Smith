class Cart {

    get sauceBackPack() { return (`a[id='item_4_title_link'] div[class='inventory_item_name']`)}
    get sauceBikeLight() { return (`a[id='item_0_title_link'] div[class='inventory_item_name']`)}
    get cartBtn() { return (`#add-to-cart-sauce-labs-backpack`)}
    get cartBtn1() { return (`#add-to-cart-sauce-labs-bike-light`)}
    get shopLink() { return (`.shopping_cart_link`)}
    get removeBtn() { return (`#remove-sauce-labs-backpack`)}

    checkout(){
        cy.get(this.sauceBackPack).click()
        cy.get(this.cartBtn).click()
        //cy.get(this.sauceBikeLight)
        //cy.get(this.cartBtn1)

    }
    checkout1(){

        cy.get(this.sauceBackPack).click()
        cy.get(this.sauceBikeLight).click()
        cy.get(this.cartBtn1).click
    }
    removeItem(){
        cy.get(this.shopLink).click()
        cy.get(this.removeBtn).click()
    }


}
export default new Cart