const {BasePage, By, Key} = require('./BasePage');

class HWDIpage extends BasePage
{
    constructor(webdriver)
    {
        super(webdriver);
        
        this.HWDIBut = By.xpath('//*[@id="wrapper"]/div[2]/div[2]/div/div/header/div/nav/ul/li[2]/span/a');
    }
}

module.exports = HWDIpage;