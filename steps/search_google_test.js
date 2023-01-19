Feature('Search GFT');

Scenario('Search GFT',  ({ I }) => {
    I.amOnPage('https://www.gft.com/br/pt')
    I.waitForElement('#menu', 5)
    I.click('#menu')
});