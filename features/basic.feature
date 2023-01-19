Feature: Cadastro no aplicativo
Eu como usuario
Gostaria de fazer o login e o 
Para efetuar o cadastro na aplicacao

Scenario: Login com sucesso
  Given I fill email
  And I fill password
  When I tap on Entrar
  Then I see the Salvar button

Scenario: Login com email incorreto
  Given I fill in the wrong email
  And I fill password
  When I tap on Entrar
  Then I see error message

Scenario: Registrar o estudante com sucesso
  Given the user is logged into the app
  When to enroll a student
  Then the student application is successfully saved

Scenario: Utilizar scroll na tela do aplicativo com sucesso
  Given the user is logged into the app
  When confirm that I successfully accessed the application
  Then screen scrolling is successful