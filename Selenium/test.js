const { time } = require('console');
const {Builder, By, until} = require('selenium-webdriver');
driver = new Builder()
            .forBrowser('firefox')
            .build();


driver.get('https://www.epam.com');

let langBut = By.className('location-selector__button');

//driver.wait(until.elementLocated(langBut))

driver.findElement(langBut).click();

let ukrainian = By.linkText('Ukraine ');

driver.wait(until.elementLocated(ukrainian));

driver.findElement(ukrainian).click();