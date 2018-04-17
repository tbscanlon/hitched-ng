import { binding, given, then, when } from "cucumber-tsflow";
import { browser, element, by } from "protractor";

const chai = require("chai").use(require("chai-as-promised"));
const expect: Chai.ExpectStatic = chai.expect;

@binding()
class HomePage {
    @given(/^I am on the home page$/)
    public iAmOnTheHomePage(callback: Function): void {
        browser.get("/");
        callback();
    }

    @when(/^I scroll to the top of the page$/)
    public iScrollToTop(callback: Function): void {
        browser.executeScript("window.scrollTo(0,0)");
        callback();
    }

    @then(/^I should see the hero image banner$/)
    public iShouldSeeHeroBanner(callback: Function): void {
        expect(
            element(
                by.css(".jumbotron h1")
            )
            .getText()
        )
        .to.eventually.equal("Hello world").and.notify(callback);
    }
}
