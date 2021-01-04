/// <reference path="../support/index.d.ts" />

describe('Accessibility tests', () => {
  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/').get('main').injectAxe()
    })
    it('Has no detectable accessibility violations on load', () => {
      cy.checkA11y()
    })

    it('Dark Mode has no accessibility issues', () => {
      cy.findByLabelText(/dark mode toggle/i).click({ force: true })
      cy.wait(600)

      cy.checkA11y()

      cy.findByLabelText(/dark mode toggle/i).click({ force: true })
    })
  })

  describe('Quote Page', () => {
    beforeEach(() => {
      cy.visit('/quote').get('main').injectAxe()
    })
    it('Has no detectable accessibility violations on load', () => {
      cy.checkA11y()
    })

    it('Dark Mode has no accessibility issues', () => {
      cy.findByLabelText(/dark mode toggle/i).click({ force: true })
      cy.wait(600)

      cy.checkA11y()

      cy.findByLabelText(/dark mode toggle/i).click({ force: true })
    })
  })
})
