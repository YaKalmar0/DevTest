const {BasePage, By, Key} = require('./BasePage');

class Homepage extends BasePage
{
    constructor()
    {
        super();

        this.acceptcookBut = By.xpath('/html/body/div[1]/div[1]/div/div/div[2]/button');
        this.url = 'https://www.epam.com';

        //___header
        this.insightsBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[4]/span/a');
        this.careersBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[6]/span[1]/a');
        this.magglassBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/button');
        this.contactBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[1]/a');
        this.HWDIBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[2]/span/a');
        this.ourworkBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[3]');
        //___
        
        this.langBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/button');
        this.ukrLang = By.xpath('/html/body/div[2]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[8]/a');

        this.lookforStr = By.id("new_form_search");
        this.findBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/div/form/button');
        this.search_resDiv = By.xpath('//*[@id="main"]/div[1]/div/section/div/div[2]/section/div[1]');

        this.dotBut = By.className('slider__dot bg-color-white');
        //this.crunch_elem = this._driver.findElement(By.xpath('//*[@id="main"]/div[1]/div[2]'));
        this.crunch_elem = this._driver.findElement(By.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div'));
        this.learnmoreBut = By.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div/div[1]/div/div[6]/div/div/div/div/div/div/div/div/div/div[3]/div/a');
    }

    async getHomepage()
    {
        await this._driver.get(this.url);
    }

    async AcceptCookies()
    {
        await this._driver
            .findElement(this.acceptcookBut)
            .click();
    }

    async ChangeLang()
    {
        await this._driver
            .findElement(this.langBut)
            .click();
        
        await this._driver
            .findElement(this.ukrLang)
            .click();
    }

    async goInsights()
    {
        await this._driver
            .findElement(this.insightsBut)
            .click();
    }

    async goCareers()
    {
        await this._driver
            .findElement(this.careersBut)
            .click();
    }

    async getDriver()
    {
        return this._driver;
    }

    async lookThrough(word)
    {
        await this._driver
            .findElement(this.magglassBut)
            .click();
        await this._driver
            .findElement(this.lookforStr)
            .sendKeys(word);
        await this._driver
            .findElement(this.findBut)
            .click();
    }



}

module.exports = Homepage;