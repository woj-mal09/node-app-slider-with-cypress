describe('Swiper Gallery Test', function () {
  it('Checks if first slide contains "Rome"', function () {
    cy.visit('http://localhost:3000');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slide looping works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slide backtracking works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});