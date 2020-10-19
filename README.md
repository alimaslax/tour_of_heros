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


For the project I decided to use SCSS. The reason is because SCSS is a superset of CSS,containing more features that are not present in CSS which makes it a good choice for developers to use. SCSS is full of advanced features. For example SCSS offers variables, you can shorten your code by using variables.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Components
This application is broken up to 5 major componenets, each dealing with a respective feature in our app.

 1. Dashboard
 2. HeroDetail
 3. HeroSearch
 4. Heroes
 5. Messages

## Services
There are 3 main services our application uses through Angular's dependancy Injection.
 
 1. Hero Service
 This service provides the application classes with access to the heroes. It is injected into the root of our application for all componenets to access. It has a host of methods [getHero, searchHero, addHero, deleteHero, and updateHero] that transform our list of heroes.
 2. Message Service
 This service provides access to our messages for the application.
 3. In Memory service
This service creates in memory database for our application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Built Application without Docker

We will be using http-server to serve the files. First install the package globally
```
npm install http-server -g
```
Then inside your project directory(in the terminal) just run

http-server dist/

And if you are using Angular 6+ or above (Working with Angular 10), You have to run

http-server dist/your-project-name

Now you can visit http://localhost:8080 to view your application

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Building the Docker image
Run the following command to build the Docker Image
```
docker build -t <your username>/tour_of_heroes .
```
Check to see if Image was built correctly:
```
docker images
```
## Running the Docker container
Run the following command to run a built Image.
```
docker run -d --name [name] -p [external port]:3000 IMAGE
```

the example below binds our localhost port 3000 to port 3000 of the container, -d is for 
run container in background and print container ID
```
docker run -d --name tour_of_heroes -p 3000:3000 alimaslax/immunahw
```