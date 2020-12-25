const {Builder, By, Key, until} = require('selenium-webdriver');

class BasePage
{
    constructor(webdriver)
    {
        if (typeof webdriver == 'undefined')
        {
            webdriver = new Builder()
                .forBrowser('firefox')
                .build();
        }
        this._driver = webdriver;
        this._driver.manage().window().maximize();
    }

    async getCurrentUrl()
    {
        return await this._driver.getCurrentUrl();
    }

    async click(button)
    {
        await this._driver
            .findElement(button)
            .click();
    }

    async killFirefox()
    {
        await this._driver.quit();
    }

    async sendKey(word, button)
    {
        await this._driver
            .findElement(button)
            .sendKeys(word);
    }

    async getButtonColour(button)
    {
        return await this._driver
            .findElement(button)
            .getCssValue('color');
    }

    async locateElement(button)
    {
        await this._driver.wait(until.elementLocated(button));
    }

    async findElements(element)
    {
        return await this._driver.findElements(element);
    }

    async getText(element)
    {
        return await this._driver.findElement(element).getText();
    }

    async scrollTo(element)
    {
        await this._driver.executeScript("arguments[0].scrollIntoView()", element);
    }
};

module.exports = {BasePage, By, Key};