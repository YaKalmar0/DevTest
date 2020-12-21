//const { time } = require('console');

const { executionAsyncId } = require('async_hooks');
const { hasUncaughtExceptionCaptureCallback, execPath } = require('process');
const {Builder, By, until, WebElement} = require('selenium-webdriver');


describe("EPAM website testing", () => {
    let driver;
    let acceptcookBut;

    beforeEach( async () => {
        driver = new Builder()
            .forBrowser('firefox')
            .build();

        acceptcookBut = By.xpath('/html/body/div[1]/div[1]/div/div/div[2]/button');
        await driver.manage().window().maximize();

        await driver.get('https://www.epam.com');

        await new Promise(r => setTimeout(r, 1300));
        await driver
            .findElement(acceptcookBut)
            .click();
    }, 40000);

    it('should change language to UA', async () => {
        langBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/button');
        driver
            .findElement(langBut)
            .click();
        
        ukrLang = By.xpath('/html/body/div[2]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[8]/a');
        await driver.findElement(ukrLang).click();
        
        const ukr_url = await driver.getCurrentUrl();
        expect(ukr_url).toBe('https://careers.epam.ua/');
    }, 10000);

    it('should check EPAM Insights', async () => {
        let insightsBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[4]/span/a');

        await driver.findElement(insightsBut).click();
        const insights_url = await driver.getCurrentUrl();
        expect(insights_url).toBe('https://www.epam.com/insights');
    }, 10000);
    

    it('should pursue a career in EPAM family', async () => {
        let careersBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[6]/span[1]/a');
        let keywordBut = By.xpath('//*[@id="new_form_job_search_1445745853_copy-keyword"]');

        let locationBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/div[2]/div/span/span[1]/span/span[2]/b');
        let locationinputBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/div[2]/div/span[2]/span/span[1]/input');

        let findBut = By.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/button');
        let resultError = By.className('search-result__error-message');


        await driver.findElement(careersBut).click();

        await driver
            .findElement(keywordBut)
            .sendKeys('Systems Analyst');
    
        await new Promise(r => setTimeout(r, 300));

        await driver
            .findElement(locationBut)
            .click();

        await driver
            .findElement(locationinputBut)
            .sendKeys('Kyiv');
        
        await new Promise(r => setTimeout(r, 300));

        await driver
            .findElement(findBut)
            .click();

        let res = await driver.findElement(resultError);
        await new Promise(r => setTimeout(r, 2000));
        
        expect(res == 'Sorry, your search returned no results. Please try another combination.');
    }, 20000);
    
    it('should look for IASA', async () => {
        let magglassBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/button');
        let lookforStr = By.id("new_form_search");
        let findBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/div/form/button');
        let search_resDiv = By.xpath('//*[@id="main"]/div[1]/div/section/div/div[2]/section/div[1]')

        await driver
            .findElement(magglassBut)
            .click();
        await driver
            .findElement(lookforStr)
            .sendKeys("IASA");
        await driver
            .findElement(findBut)
            .click();

        const iasa_find_url = await driver.getCurrentUrl();
        let url_res = (iasa_find_url == 'https://www.epam.com/search?q=IASA');
        let str_res = await driver.findElement(search_resDiv);

        await new Promise(r => setTimeout(r, 1000));
        str_res = await str_res.getText();
        answer_res = (str_res == 'Sorry, but your search returned no results. Please try another query.');

        expect(url_res && answer_res).toBe(true)

    }, 10000);

    it('should let me see EPAM contacts', async () => {
        let contactBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[1]/a');

        await driver
            .findElement(contactBut)
            .click();
        
        const contact_url = await driver.getCurrentUrl();

        expect(contact_url).toBe('https://www.epam.com/about/who-we-are/contact')
    }, 10000);

    it('should have a blue colour of active button', async () => {
        let HWDIBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[2]/span/a');
        let HWDIBut2 = By.xpath('//*[@id="wrapper"]/div[2]/div[2]/div/div/header/div/nav/ul/li[2]/span/a');
        
        await driver
            .findElement(HWDIBut)
            .click();
        
        await new Promise(r => setTimeout(r, 500));

        let hwdi_button = driver.findElement(HWDIBut2);
        let hwdi_colour = await hwdi_button.getCssValue('color');

        await new Promise(r => setTimeout(r, 500));

        expect(hwdi_colour).toBe('rgb(118, 205, 216)');
    }, 15000);

    it('should have 11 elements in the box', async () => {
        let ourworkBut = By.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[3]');
        let boxpath = By.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div/ul');
        let box_item = By.className('in-page-navigation__item')
        
        await driver
            .findElement(ourworkBut)
            .click();
        
        await new Promise(r => setTimeout(r, 500));

        await driver.wait(until.elementLocated(boxpath));
        await driver
            .findElements(box_item)
            .then((elements) => expect(elements.length).toEqual(11));
    }, 15000);

    it('should have 4 clickable elements with specified link at last', async () => {
        let dotBut = By.className('slider__dot bg-color-white')
        let crunch_elem = await driver.findElement(By.xpath('//*[@id="main"]/div[1]/div[2]'));
        let learnmoreBut = By.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div/div[1]/div/div[6]/div/div/div/div/div/div/div/div/div/div[3]/div/a');

        await driver.executeScript("arguments[0].scrollIntoView()", crunch_elem);
        await new Promise(r => setTimeout(r, 500));

        await driver
            .findElements(dotBut)
            .then((elements) => elements.forEach( async (element) => {
                await element.click();
            }));
        
        await new Promise(r => setTimeout(r, 500));

        await driver
            .findElement(learnmoreBut)
            .click();
        
        await new Promise(r => setTimeout(r, 500));

        const url = await driver.getCurrentUrl();
        await new Promise(r => setTimeout(r, 500));

        expect(url).toBe('https://www.epam.com/rdk');
    }, 20000);



    afterEach(async () => driver.quit());
});

