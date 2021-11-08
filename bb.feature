Feature: Backbase Web WA assignment scenarios
	Background: verify that user is able to login to the application successfully
		Given Open the url of the application with username and password
		Then user should be redirected to the application homepage
	Scenario: verify that user is able to see the expected details after login
		Then verify the application page title
		Then verify the application heading text
	Scenario: verify that user is able to click on the crud tag
		Given crud tag should be present in the list of tags
		When click on the crud tag link from the list of tags
		Then crud tag page should be displayed successfully
	Scenario: verify that user is able to see all the results for crud tag
		Given crud tag should be present in the list of tags
		When click on the crud tag link from the list of tags
		Then crud tag page should be displayed successfully
		Then verify the number of pages present for crud tag
		Then Verify the number of articles present in one page
	Scenario: verify that user is able to check the details of crud article
		Given crud tag should be present in the list of tags
		When click on the crud tag link from the list of tags
		Then crud tag page should be displayed successfully
		Then verify the comment text for crud article
	Scenario: verify that user is able to click on a particular article
		Given crud tag should be present in the list of tags
		When click on the crud tag link from the list of tags
		Then crud tag page should be displayed successfully
		When click on the crud article from the list of articles
		Then user should be redirected to article page
	Scenario: verify that user is able to redirect to that article page and verify the comment successfully
		Given crud tag should be present in the list of tags
		When click on the crud tag link from the list of tags
		Then crud tag page should be displayed successfully
		When click on the crud article from the list of articles
		Then user should be redirected to article page
		Then verify the comments on crud article
