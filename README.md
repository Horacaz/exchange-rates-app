[![Deployment Pipeline](https://github.com/Horacaz/exchange-rates-app/actions/workflows/pipeline.yml/badge.svg?branch=test-ts)](https://github.com/Horacaz/exchange-rates-app/actions/workflows/pipeline.yml)

# Exchange-rates-app
 
A simple Exchange Rates App using ```exchange-rates-api.com```. It lets you see the equivalencies
of different currencies displayed on a table. Also enables the user to select both a Base Currency and a Target Currency. By introducing a desired amount the app will show the equivalence between these and update the exchange calculator on the fly.

## Getting started with this repository

After downloading this repository it is necessary to install its dependencies by running ```npm install```.

## Development Build

To initialize a development build you need to start a production server by running the provided script```npm run start```. This will let you see the functionality of the App as it's properly intended.

## Tech Stack

This App has been made using vanilla Javascript and styled using Bootstrap 5. It is also Unit Tested with Jest and E2E Tested with Cypress, the code is also linted using Eslint. The repository possess a GitHubActions workflow to ensure any pull request and pushes to the main branch are updated and the changes made pass both the Unit Tests and E2E Tests. It is planned in the near future to update the Project using Typescript.

## App Preview
#
![App Peview](app-preview.png)