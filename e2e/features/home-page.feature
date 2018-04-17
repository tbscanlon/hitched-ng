Feature: Homepage

    As a site visitor,
    I would like to have an informative Homepage,
    So that I can understand the business and its offerings.

    Background:
        Given I am on the home page

    Scenario: Homepage hero image
        When I scroll to the top of the page
        Then I should see the hero image banner
