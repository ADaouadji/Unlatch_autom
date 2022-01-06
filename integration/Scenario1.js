
//########################         Scénario 2 :        #################### 
//###########    Mot de passe incorrect/oublie de mot de passe :   ###########



describe('legalife auto', () => {
  it('Connexion legalife', () => {
    cy.visit('https://www.legalife.fr/') 
    //Clique sur le bouton "connexion" de la page d'accueil
    cy.get(':nth-child(2) > .link').click()
    //Entre un email dans le champ email
    cy.get('#login-popup-login > form > [data-bind="value:email"]').type('blabla@mail.com')
    cy.wait(1000)
    //Entre un mot de passe dans le champ mot de passe 
    cy.get('#login-popup-login > form > [name="password"]').type('azerty123')
    cy.wait(1000)
    //Clique sur le bouton connexion
    cy.get('.row').click()
    cy.wait(1000)
    //Vérification que l'erreur est bien affiché si le mot de passe est incorrect
    cy.get('#login-popup-login > .error').should('exist')
    cy.wait(2000)
    //Clique sur le lien "j'ai oublié mon mot de passe" 
    cy.get(':nth-child(6) > a').click()
    cy.wait(2000)
    //Clique sur le bouton réinitialiser mot de passe
    cy.get('#login-popup-reset-password > form > .btn').click()
    cy.wait(2000)
    //Vérifie que le message de "l'envoi d'un lien de réinitialisation de mdp a été envoyé" est bien affiché
    cy.get('#login-popup-reset-password > .success').should('exist')
    cy.wait(2000)
    //Clique sur le lien de retour à la page de connexion
    cy.get('#login-popup-reset-password > .toggle > a').click()
  })
  })