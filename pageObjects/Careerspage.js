const {BasePage, By, Key} = require('./BasePage');

class Careerspage extends BasePage
{
    constructor(webdriver)
    {
        super(webdriver);

        this.keywordBut = By.xpath('//*[@id="new_form_job_search_1445745853_copy-keyword"]');
        this.locationBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/div[2]/div/span/span[1]/span/span[2]/b');
        this.locationinputBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/div[2]/div/span[2]/span/span[1]/input');
        this.findBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/button');
        this.resultError = By.className('search-result__error-message');
    }

    async changeLocation(word)
    {
        await this._driver
            .findElement(this.locationBut)
            .click();

        await this._driver
            .findElement(this.locationinputBut)
            .sendKeys(word, Key.ENTER);
    }

    async getErrorMessage()
    {
        return await this._driver.findElement(this.resultError);
    }
}

module.exports = Careerspage;