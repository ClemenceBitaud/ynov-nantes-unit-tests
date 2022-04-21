Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');
    I.click('.cta');
    I.fillField('.searchfield', 'info');
    I.wait(5);
    I.see('Bachelor Informatique');
});
