describe('Info Page', () => {
  it('loads info overview', () => {
    cy.visit('/info')
    cy.get('#info-overview-title').should('be.visible')
  })

  it('loads info pools page', () => {
    cy.visit('/info/pools')
    cy.get('#info-pools-title').should('be.visible')
  })

  it('loads single pool page', () => {
    cy.visit('/info/pool/0x58f876857a02d6762e0101bb5c46a8c1ed44dc16')
    cy.get('#info-pool-pair-title').should('be.visible')
  })

  it('loads info tokens page', () => {
    cy.visit('/info/tokens')
    cy.get('#info-tokens-title').should('be.visible')
  })

  it('loads single token page', () => {
    cy.visit('/info/token/0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F')
    cy.get('#info-token-name-title').should('be.visible')
  })
})
