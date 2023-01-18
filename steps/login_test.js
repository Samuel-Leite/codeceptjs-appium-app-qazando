Feature('login');

// variavel global
const { I } = inject()

BeforeSuite(() => {
    console.log('Before Suite')
    // login_page.doLogin('teste@teste.com', '123456')
});

Before(() => {
    console.log('Before cenario')
    // login_page.doLogin('teste@teste.com', '123456')
});

AfterSuite(() => {
    console.log('After Suite')
});

After(() => {
    console.log('After cenario')
});


Scenario('Login with success', ( {login_page, home_page} ) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error',  ( {login_page} ) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});