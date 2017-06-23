# Lightning Dev Tools

[![Build Status](https://travis-ci.org/dangt85/lightningdevtools.svg?branch=master)](https://travis-ci.org/dangt85/lightningdevtools)

This is a set of Salesforce Developer tools inspired on [Ben Edward's](https://twitter.com/benedwards44) [Salesforce Toolkit](http://sftoolkit.co) using Lightning Desing System, Angular 4, NodeJS 6.x, travis-ci, GitHub and Heroku pipelines.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Follow these steps to make a clean pull request:

- Create a personal forg of [this project](https://github.com/dangt85/lightningdevtools)
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
- Add the original repository as a remote called `upstream`.
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! Branch from `develop` if it exists, else from `master`.
- Write or adapt tests as needed. If you don't like TDD, do this step before committing any changes.
- Implement/fix your feature, comment your code.
- Follow the code style of the project, including indentation.
- Make sure your tests pass.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github using the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `master`!
- If the maintainer requests further changes just push them to your branch. The PR will be updated automatically.
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
your extra branch(es).

And last but not least: Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the code – not what you did to the code.

## Deploy to Heroku

If you fork this project, you can configure Heroku to automatically deploy the app from your fork. You can use a single app or a pipeline. Follow these articles:

- [Heroku GitHub Deploys](https://devcenter.heroku.com/articles/github-integration)
- [Heroku Pipelines](https://devcenter.heroku.com/articles/pipelines)

## Run the live project 

Go to (Lightning Dev Tools)[https://lightningdevtools.herokuapp.com]