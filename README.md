# AngularTourOfHeroes
The Tour of Heroes app that you build helps a staffing agency manage its stable of heroes. The application acuiries and displays a list of heros, and gives the end user the ability to edit selected hero's detail, and navigate among the different views of heroic data. This data-driven application has a host of modern angular features. 

The following is a snapshot of its features:
 * Built-in Angular directives that show and hide elements and displays the list of hero data
 * Angular componenets to display hero details and show an array of heros
 * One-way data binding for read-only data.
 * Editable fields to update a model with two-way data binding.
 * Enable users to select a hero from a master list and edit that hero in the details view.
 * A shared service to assemble the heroes.
There are several
*  Routing to navigate among different views and their components.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.
For the project I decided to use SCSS. The reason is because SCSSis a superset of CSS,containing more features that are not present in CSS which makes it a good choice for developers to use it. SCSS is full of advanced features. For example SCSS offers variables, you can shorten your code by using variables.


## Components
This application is broken up to 5 major componenets

 1. Dashboard
 2. HeroDetail
 3. HeroSearch
 4. Heroes
 5. Messages

## Services
There are 3 main services our application uses through Angular's dependancy Injection.
 
 1. Hero Service
 2. Message Service
 3. In Memory service
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

