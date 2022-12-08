import Auth from '../page/auth.page'

describe('Data-driven login', function () {

    beforeEach(() => {
        cy.visit(`/`) 
            })

    
                it(`should login with standard user data (data driven)`, () => {

                cy.fixture('standardData').then( (data) => {

                 cy.get('#user-name').type(data.username);
                    cy.get('#password').type(data.password);   
                    cy.get(`#login-button`).click() 
                    cy.get(`a[id='item_4_title_link'] div[class='inventory_item_name']`).should(`have.text`,data.expected);
            
                })
        })


                it(`should not login with locked out user data (data driven)`, () => {

                        cy.fixture('lockedData').then( (data) => {

                        cy.get('#user-name').type(data.username);
                        cy.get('#password').type(data.password);   
                        cy.get(`#login-button`).click() 
                        cy.get('[data-test="error"]').should(`have.text`,data.expected);
                     })
                })

                it(`should login with problem user data (data driven)`, () => {

                        cy.fixture('problemData').then( (data) => {
                    
                        cy.get('#user-name').type(data.username);
                        cy.get('#password').type(data.password);   
                        cy.get(`#login-button`).click() 
                        cy.get(`a[id='item_4_title_link'] div[class='inventory_item_name']`).should(`have.text`,data.expected);
                        })
                })      


                    it(`should login with performance issue user data (data driven)`, () => {

                        cy.fixture('performanceData').then( (data) => {

                        cy.get('#user-name').type(data.username);
                        cy.get('#password').type(data.password);   
                        cy.get(`#login-button`).click() 
                        cy.get(`a[id='item_4_title_link'] div[class='inventory_item_name']`).should(`have.text`,data.expected);
                        })

                    })
    

        
 })












