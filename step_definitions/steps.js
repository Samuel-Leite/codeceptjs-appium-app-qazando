const { I } = inject();
// Add in your custom step files

Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com')
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



//



const { login_page, home_page } = inject()
const code = require('../utils/code')
const name = require('../utils/name')

Given('the user is logged into the app', () => {
  login_page.doLogin('teste@teste.com', '123456')
});

When('to enroll a student', () => {
  const mycode = code.getCode()
  const myname = name.getName()

  home_page.registerStudent(mycode, myname)
  home_page.searchStudent(myname, mycode)
});

Then('the student application is successfully saved', () => {
  const mycode = code.getCode()
  const myname = name.getName()

  home_page.registerStudent(mycode, myname)
  home_page.searchStudent(myname, mycode)
});
