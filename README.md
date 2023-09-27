## Main lib 
* [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.
* [Font Awesome Free ](https://fontawesome.com/v5/search?m=free) version 5.15.3
* [Admin LTE](https://www.youtube.com/watch?v=UNomyjz0ewA) version 3.1.0

## Build & Deployment
* Xóa file test.html trong node_modules/admin-lte
* Build for IIS (no need web.config) debug: `ng build --base-href /`
* Build for IIS (no need web.config) prod: `ng build --base-href / --prod`
* Build for Apache (need .htaccess): `ng build`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng g c something-component --flat -it -is --skipTests` or `ng g c file -is -spec false` to generate a new component with out css and test. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
