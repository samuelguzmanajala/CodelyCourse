Feature: Create new note
  In order to have note in the application
  As a user
  I want to create a new course

  Scenario: A valid non existing note
    Given I send a PUT request to "/notes/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    { 
      "title": "The best course",
      "body": "5 hours"
    }
    """
    Then the response status code should be 201
    And the response should be empty