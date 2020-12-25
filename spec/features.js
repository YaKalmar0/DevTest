const Careerspage = require('../pageObjects/Careerspage');
const Homepage = require('../pageObjects/Homepage');
const HWDIpage = require('../pageObjects/HWDIpage');
const OurWorkpage = require('../pageObjects/OurWorkpage');

describe("EPAM website testing", () => {
    let Home;
    let Careers;

    beforeEach( async () => {
        Home = new Homepage();
        await Home.getHomepage();
        await Home.click(Home.acceptcookBut);
    }, 10000);
    
    it('should change language to UA', async () => {
        await Home.ChangeLang();
        const ukr_url = await Home.getCurrentUrl();
        await expect(ukr_url).toBe('https://careers.epam.ua/');
    }, 10000);

    it('should check EPAM Insights', async () => {
        await Home.goInsights();
        const insights_url = await Home.getCurrentUrl();
        expect(insights_url).toBe('https://www.epam.com/insights');
    }, 10000);
    
    it('should pursue a career in EPAM family', async () => {
        await Home.goCareers();
        Careers = new Careerspage(await Home.getDriver());
        
        await Careers.sendKey('Systems Analyst', Careers.keywordBut);
        await Careers.changeLocation('Waterloo');
        await Careers.click(Careers.findBut);

        const res = await Careers.getErrorMessage();
        await expect(res == 'Sorry, your search returned no results. Please try another combination.');
    }, 15000);
    
    
    it('should look for IASA', async () => {
        await Home.lookThrough("IASA");

        const url_res = (await Home.getCurrentUrl() == 'https://www.epam.com/search?q=IASA');
        await new Promise(r => setTimeout(r, 300));
        const str_res = await Home.getText(Home.search_resDiv);

        const answer_res = (str_res == 'Sorry, but your search returned no results. Please try another query.');
        await expect(url_res && answer_res).toBe(true)

    }, 10000);

    
    it('should let me see EPAM contacts', async () => {
        await Home.click(Home.contactBut);
        const contact_url = await Home.getCurrentUrl();

        await expect(contact_url).toBe('https://www.epam.com/about/who-we-are/contact')
    }, 10000);
    
    it('should have a blue colour of active button', async () => {
        Home.click(Home.HWDIBut);
        let HWDI = new HWDIpage(await Home.getDriver());
        await new Promise(r => setTimeout(r, 300));
        const hwdi_colour = await HWDI.getButtonColour(HWDI.HWDIBut);

        await expect(hwdi_colour).toBe('rgb(118, 205, 216)');
    }, 10000);
    
    it('should have 11 elements in the box', async () => {
        await Home.click(Home.ourworkBut);
        let OurWork = new OurWorkpage(await Home.getDriver());
        await new Promise(r => setTimeout(r, 200));
        await OurWork.locateElement(OurWork.boxpath);
        await OurWork.findElements(OurWork.box_item)
            .then(async (elements) => await expect(elements.length).toEqual(11));
    }, 15000);

    
    it('should have 4 clickable elements with specified link at last', async () => {
        await Home.scrollTo(Home.crunch_elem);
        
        
        await Home.findElements(Home.dotBut)
            .then(async (elements) => {
                    await new Promise(r => setTimeout(r, 400));
                    await elements.forEach( async (element) => {
                        await element.click();
                        await new Promise(r => setTimeout(r, 500)); 
                    });
                });
        
        await new Promise(r => setTimeout(r, 400));
        await Home.click(Home.learnmoreBut)
        await new Promise(r => setTimeout(r, 1000))
        const url = await Home.getCurrentUrl();

        await expect(url).toBe('https://www.epam.com/rdk');
    }, 20000);


    afterEach(async () => await Home.killFirefox());
});

