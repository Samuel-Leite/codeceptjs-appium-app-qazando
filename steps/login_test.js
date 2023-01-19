Feature('login');

// variavel global
const { I } = inject()

Scenario('Login with success', ( {login_page, home_page} ) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()

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

}).tag('@login_sucesso');

Scenario('Login with error',  ( {login_page} ) => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});