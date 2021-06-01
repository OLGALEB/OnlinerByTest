@smoke
Feature: Onliner's Header and Footer feature testing
    #Description: Check "Дома и квартиры" link from Header + check "Манифест" link from Footer
    Scenario: Click on "Дома и квартиры" hyperlink which located inside the onliner.by header
        Given Homepage onliner.by was opened
        When Click on "Дома и квартиры" hyperlink 
        Then User was redirected to specific "Дома и квартиры" page


    Scenario: Click on "Манифест" hyperlink which located inside the onliner.by footer
        Given Homepage onliner.by was opened
        When Click on "Манифест" hyperlink 
        Then User was redirected to specific "Манифест" page
