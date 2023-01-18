Feature('Students');

// variavel global
const { I, login_page, home_page } = inject()
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Add student with success', () => {

    const mycode = code.getCode()
    const myname = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(mycode, myname)
    home_page.searchStudent(myname, mycode)
});