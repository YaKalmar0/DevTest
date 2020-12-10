Feature: EPAM-test
    I am made to do EPAM testing.

    Background:
        Given EPAM website "https://www.epam.com"


    Scenario: Change language to UA
        Given I am an average user
        When I click on drop-down language tab
        And I choose "Ukraine (English)"
        Then I get redirected to "https://careers.epam.ua"
        And I am confused


    Scenario: Go to Careers
        Given I am a tester
        When I click "CAREERS" button
        Then I get redirected to "https://www.epam.com/careers"


    Scenario: Career Pursuing
        Given "https://www.epam.com/careers"
        When I choose <location> in location
        And enter <position> as a keyword
        And click button "FIND"
        Then I get upset because of "Sorry, your search returned no results. Please try another combination."

        Examples:
            | position          | location   |
            | "Janitor"         | "Kyiv"     |
            | "Dungeon Master"  | "Waterloo" |
            | "Systems Analyst" | "Any"      |
    

    Scenario: Partners Research
        Given I am a ukrainian patriot
        When I click "ABOUT" button
        And also click "Partners" in submenu
        Then I go to "https://www.epam.com/about/who-we-are/partners"
        But I don't see "The Ministry of Digital Transformation of Ukraine" in the list
        And I am sad
    

    Scenario: Looking for 2020 EPAM-news
        Given I believe in 2020
        When I click "ABOUT" button
        And also click "Press Releases" in submenu
        Then I get some fresh info from EPAM

    
    Scenario: Getting in contact
        Given I've got a phone
        When I click "CONTACT US" button
        Then I get redirected to https://www.epam.com/about/who-we-are/contact
        And now I can call the USA
    

    Scenario: Search for IASA
        Given I am an IASA enthusiast
        When I click on magnifying glass
        And enter "IASA" in the search bar
        And click "FIND" button
        Then I am redirected to "https://www.epam.com/search?q=IASA"
        And get "Sorry, but your search returned no results. Please try another query."
    

    Scenario: "Our Work" -> "Software & Hi-tech"
        Given I am obsessed with EPAM
        When I click "OUR WORK" button 
        And also click "SOFTWARE & HI-TECH" in submenu
        Then I get redirected to "https://www.epam.com/our-work/software-and-hi-tech"
