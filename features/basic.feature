Feature: Login
Eu como usuario
Gostaria de fazer o Login
Para acessar a aplicação


  Scenario: Login with success
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
