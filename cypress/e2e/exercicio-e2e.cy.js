/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Exercicio - Ponta a ponta', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        ///cadastro do usuário 

        /// Cadastro do cliente/login
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        /// Adicionando 4 produtos no carrinho 
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(6)').click()
        cy.get('.post-2970 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(8) > a').click()
        cy.get('.post-3006 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
        /// IR PARA CARRINHO
        cy.get('.woocommerce-message > .button').click()
        /// Concluindo compra 
        cy.get('.checkout-button').click()
        /// cadastro para faturamento 
        cy.get('#billing_address_1').type(faker.datatype.number())
        cy.get('#billing_city').type(faker.address.city())
        cy.get('#billing_postcode').type(faker.address.zipCode("72215-580"))
        cy.get('#billing_phone').type(3354 - 6461)
        ///termos 
        cy.get('#terms').click()
        /// finalizar compra
        cy.get('#place_order').click()

    });


})