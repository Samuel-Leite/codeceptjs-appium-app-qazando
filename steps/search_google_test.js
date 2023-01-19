Feature('Search Google');

Scenario('Search QAzando',  ({ I }) => {
    I.amOnPage('https://www.google.com')
    I.fillField('.gLFyf', 'QAzando')
    I.waitForElement('.sbic', 5)
    I.click('.sbic')
    I.see('www.qazando.com.br')
});