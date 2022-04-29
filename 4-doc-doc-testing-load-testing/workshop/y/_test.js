Feature('Todo Test');

Scenario('Add a todo', ({ I }) => {
    I.amOnPage('http://localhost:5000/index.html');
    I.fillField('#newTODO', 'Aller au sport');
    I.click('#create-todo');
    I.wait(2);
    I.see('Aller au sport', '.text-left');
});

Scenario('A todo is completed', ({ I }) => {
    I.amOnPage('http://localhost:5000/index.html');
    I.click('//html/body/div/div/div[1]/table/tbody/tr[1]/td[2]/button');
    I.wait(2);
    I.see('Aller au sport', '#done-body');
});
