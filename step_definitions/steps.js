const { I } = inject();

// Efetuar o login na aplicação com o mapeamento no próprio código
Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('I fill in the wrong email', () => {
  I.fillField('~email', 'xteste@teste.com')
});


Given('I fill password', () => {
  I.fillField('~senha', '123456')
});

When('I tap on Entrar', () => {
  I.tap('~entrar')
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});

Then('I see error message', () => {
  I.waitForElement('~lognFail', 5)
  I.seeElement('~lognFail')
});


// Efetuar o login na aplicação com o mapeamento em variáveis
const { login_page, home_page } = inject()
const code = require('../utils/code')
const name = require('../utils/name')
const mycode = code.getCode()
const myname = name.getName()

Given('the user is logged into the app', () => {
  login_page.doLogin('teste@teste.com', '123456')
});

When('to enroll a student', () => {
  home_page.registerStudent(mycode, myname)
  home_page.searchStudent(myname, mycode)
});

Then('the student application is successfully saved', () => {
  home_page.registerStudent(mycode, myname)
  home_page.searchStudent(myname, mycode)
});

When('confirm that I successfully accessed the application', () => {
  home_page.checkLoginSuccess()
});

Then('screen scrolling is successful', () => {
  I.touchPerform([
    {
        action: 'longPress',
        options: {x:300,  y: 1100}
    },
    {
        action: 'moveTo',
        options: {x:300,  y: 250}
    },
    { action: 'release'}
])

I.wait(5)
});
