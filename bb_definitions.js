//features/step_definitions/NewTestData_Definitions.js
'use strict';
var { Given, When, Then, After, then, and } = require('cucumber');
var locators = require('protractor/BB_QA_Assignment/bb_locators.js');
var properties = require('protractor/BB_QA_Assignment/bb_properties.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
After(function (scenarioResult) {
	let self = this;
	if (scenarioResult.result.status === 'failed') {
		return browser.takeScreenshot()
			.then(function (screenshot) {
				const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
				self.attach(decodedImage, 'image/png');
				console.log("scenarioResult = ", scenarioResult.result.status);
			});
	}
});
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(120 * 1000);

Given(/^Open the url of the application with username and password$/,async()=>{
	await browser.get(locators.url);
});
Then(/^user should be redirected to the application homepage$/,async()=>{
	await expect(browser.getTitle()).to.eventually.equal(properties.homepageTitle);
});
Then(/^verify the application page title$/,async()=>{
	await expect(browser.getTitle()).to.eventually.equal(properties.homepageTitle);
});
Then(/^verify the application heading text$/,async()=>{
	await expect(locators.homepageheading.getText()).to.eventually.equal(properties.homepageheading1);
});
Given(/^crud tag should be present in the list of tags$/,async()=>{
	await browser.sleep(2000);
	await expect(locators.crudTag.getText()).to.eventually.include(properties.crudTag);
});
When(/^click on the crud tag link from the list of tags$/,async()=>{
	await browser.executeScript("arguments[0].click();", locators.crudTag.get(791));
});
Then(/^crud tag page should be displayed successfully$/,async()=>{
	await expect(locators.crudLink.getText()).to.eventually.equal(properties.crudLink);
});
Then(/^verify the number of pages present for crud tag$/,async()=>{
	await expect(locators.crudPageCount.count()).to.eventually.equal(2);
});
Then(/^Verify the number of articles present in one page$/,async()=>{
	await expect(locators.crudArticleCount.count()).to.eventually.equal(10);
});
Then(/^verify the comment text for crud article$/,async()=>{
	await expect(locators.crudArticleAuthor.get(0).getText()).to.eventually.equal(properties.crudArticleAuthor);
	await expect(locators.crudArticleDate.get(0).getText()).to.eventually.equal(properties.crudArticleDate);
});
When(/^click on the crud article from the list of articles$/,async()=>{
	await browser.executeScript("arguments[0].click();", locators.crudArticlePreview.get(0));
});
Then(/^user should be redirected to article page$/,async()=>{
	await expect(locators.crudArticlePreviewDetails.getText()).to.eventually.equal(properties.crudTag);
});
Then(/^verify the comments on crud article$/,async()=>{
	await expect(locators.crudArticlePreviewText.getText()).to.eventually.include(properties.crudArticlePreviewText);
});
