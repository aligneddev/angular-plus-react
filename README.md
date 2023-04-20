# Interweaving Angular and React

Goal: I needed to use an Angular component inside of a React component (a company wide React header that is hosted in [bit.cloud](https://bit.cloud/)) that is inside of my Angular app. 

My Angular component needed to be on/in the header and was sufficiently complex that I didn't want to rewrite it in React.

This is a minimal reference solution I created today. I started with and followed instructions from [Machine Llama](https://javascript.plainenglish.io/how-to-dynamically-integrate-angular-in-react-and-share-data-between-both-c507e90b1f09) and [his code](https://github.com/MachineLlama/multi-app).
This approach is different in that I put both Angular and React in the same app, instead of 2 different apps that Machine Llama has.

The Angular components are bordered in red, the React components are bordered in blue.

## Development Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
