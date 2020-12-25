const {BasePage, By, Key} = require('./BasePage');

class OurWorkpage extends BasePage
{
    constructor(webdriver)
    {
        super(webdriver);

        this.boxpath = By.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div/ul');
        this.box_item = By.className('in-page-navigation__item')
    }

}

module.exports = OurWorkpage;