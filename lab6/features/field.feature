Feature: Generator Field functionality
  In order to filter data efficiently
  As a developer
  I want to extract specific fields from a list of dictionaries

  Scenario: Extract single field values
    Given a list of goods
      | title            | price | color |
      | Ковер            | 2000  | green |
      | Диван для отдыха | 5300  | black |
    When I extract field "title"
    Then I get list with "Ковер", "Диван для отдыха"

  Scenario: Extract multiple fields
    Given a list of goods
      | title | price | color |
      | Ковер | 2000  | green |
    When I extract fields "title" and "color"
    Then I get a dictionary with title "Ковер" and color "green"

  Scenario: Skip None values
    Given a list of goods
      | title   | price |
      | Стеллаж | None  |
    When I extract field "price"
    Then I get an empty list
